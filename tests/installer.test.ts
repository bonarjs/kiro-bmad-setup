import fs from "fs-extra";
import { execa } from "execa";
import { install } from "../src/installer";
import path from "path";
import os from "os";

// Simplify mocking by using jest.fn() and casting to any
jest.mock("fs-extra", () => ({
  access: jest.fn(),
  copy: jest.fn(),
  mkdtemp: jest.fn().mockImplementation((prefix) => {
    const tempDir = path.join(os.tmpdir(), prefix);
    fs.ensureDirSync(tempDir);
    return Promise.resolve(tempDir);
  }),
  ensureDirSync: jest.fn(),
  removeSync: jest.fn(),
}));

const mockedFsAccess = fs.access as unknown as jest.Mock;
const mockedFsCopy = fs.copy as unknown as jest.Mock;
const mockedExeca = execa as unknown as jest.Mock;

const KIRO_DIR = ".kiro";
const BMAD_CORE_DIR = ".bmad-core";

describe("Installer", () => {
  let originalCwd: string;
  let tempDir: string;

  beforeEach(async () => {
    originalCwd = process.cwd();
    tempDir = await fs.mkdtemp(path.join(os.tmpdir(), "kiro-bmad-setup-test-"));
    process.chdir(tempDir);
    jest.resetAllMocks();
  });

  afterEach(() => {
    process.chdir(originalCwd);
    fs.removeSync(tempDir);
  });

  it("should throw an error if .kiro directory already exists", async () => {
    mockedFsAccess.mockResolvedValue(undefined as any);

    await expect(install()).rejects.toThrow(
      "A '.kiro' directory already exists. Installation aborted to prevent overwriting.",
    );
  });

  it("should install .bmad-core if it does not exist", async () => {
    mockedFsAccess.mockImplementation(async (p: string) => {
      if (p.endsWith(KIRO_DIR) || p.endsWith(BMAD_CORE_DIR)) {
        throw new Error("File not found");
      }
    });
    mockedExeca.mockResolvedValue({} as any);

    await install();

    expect(mockedExeca).toHaveBeenCalledWith(
      "npx",
      ["bmad-method", "install"],
      {
        stdio: "inherit",
      },
    );
  });

  it("should not install .bmad-core if it already exists", async () => {
    mockedFsAccess.mockImplementation(async (p: string) => {
      if (p.endsWith(KIRO_DIR)) {
        throw new Error("File not found");
      }
    });

    await install();

    expect(mockedExeca).not.toHaveBeenCalled();
  });

  it("should copy the .kiro template", async () => {
    mockedFsAccess.mockRejectedValue(new Error("File not found") as any);
    mockedFsCopy.mockResolvedValue(undefined as any);

    await install();

    const templatePath = path.resolve(__dirname, "..", "template", KIRO_DIR);
    const destinationPath = path.join(process.cwd(), KIRO_DIR);

    expect(mockedFsCopy).toHaveBeenCalledWith(templatePath, destinationPath);
  });

  it("should complete the installation successfully", async () => {
    mockedFsAccess.mockRejectedValue(new Error("File not found") as any);
    mockedExeca.mockResolvedValue({} as any);
    mockedFsCopy.mockResolvedValue(undefined as any);

    await expect(install()).resolves.not.toThrow();
  });

  it("should throw an error if .bmad-core installation fails", async () => {
    mockedFsAccess.mockRejectedValue(new Error("File not found") as any);
    mockedExeca.mockRejectedValue(new Error("Installation failed"));

    await expect(install()).rejects.toThrow(
      "Failed to install '.bmad-core': Installation failed",
    );
  });

  it("should throw an error if copying the .kiro template fails", async () => {
    mockedFsAccess.mockRejectedValue(new Error("File not found") as any);
    mockedFsCopy.mockRejectedValue(new Error("Copy failed"));

    await expect(install()).rejects.toThrow(
      "Failed to copy '.kiro' template: Copy failed",
    );
  });
});
