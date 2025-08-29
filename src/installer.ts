import path from "path";
import fs from "fs-extra";
import { execa } from "execa";

const KIRO_DIR = ".kiro";
const BMAD_CORE_DIR = ".bmad-core";

async function checkDirectoryExists(dir: string): Promise<boolean> {
  try {
    await fs.access(dir);
    return true;
  } catch {
    return false;
  }
}

async function ensureBmadCore(): Promise<void> {
  const bmadCorePath = path.join(process.cwd(), BMAD_CORE_DIR);
  const bmadCoreExists = await checkDirectoryExists(bmadCorePath);

  if (!bmadCoreExists) {
    console.log(`🌀 '.bmad-core' not found. Installing...`);
    try {
      await execa("npx", ["bmad-method", "install"], { stdio: "inherit" });
      console.log(`✅ '.bmad-core' installed successfully.`);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Failed to install '.bmad-core': ${error.message}`);
      }
      throw new Error(
        `An unknown error occurred while installing '.bmad-core'.`,
      );
    }
  } else {
    console.log(`✅ '.bmad-core' already exists.`);
  }
}

async function copyKiroTemplate(): Promise<void> {
  const templatePath = path.resolve(__dirname, "..", "template", KIRO_DIR);
  const destinationPath = path.join(process.cwd(), KIRO_DIR);

  console.log(`📂 Copying '.kiro' boilerplate...`);
  try {
    await fs.copy(templatePath, destinationPath);
    console.log(`✅ '.kiro' boilerplate copied successfully.`);
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to copy '.kiro' template: ${error.message}`);
    }
    throw new Error(
      `An unknown error occurred while copying the '.kiro' template.`,
    );
  }
}

export async function install(): Promise<void> {
  const kiroPath = path.join(process.cwd(), KIRO_DIR);
  const kiroExists = await checkDirectoryExists(kiroPath);

  if (kiroExists) {
    throw new Error(
      `A '.kiro' directory already exists. Installation aborted to prevent overwriting.`,
    );
  }

  await ensureBmadCore();
  await copyKiroTemplate();
}
