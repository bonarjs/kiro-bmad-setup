"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.install = install;
const path_1 = __importDefault(require("path"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const execa_1 = require("execa");
const KIRO_DIR = ".kiro";
const BMAD_CORE_DIR = ".bmad-core";
async function checkDirectoryExists(dir) {
    try {
        await fs_extra_1.default.access(dir);
        return true;
    }
    catch {
        return false;
    }
}
async function ensureBmadCore() {
    const bmadCorePath = path_1.default.join(process.cwd(), BMAD_CORE_DIR);
    const bmadCoreExists = await checkDirectoryExists(bmadCorePath);
    if (!bmadCoreExists) {
        console.log(`🌀 '.bmad-core' not found. Installing...`);
        try {
            await (0, execa_1.execa)("npx", ["bmad-method", "install"], { stdio: "inherit" });
            console.log(`✅ '.bmad-core' installed successfully.`);
        }
        catch (error) {
            if (error instanceof Error) {
                throw new Error(`Failed to install '.bmad-core': ${error.message}`);
            }
            throw new Error(`An unknown error occurred while installing '.bmad-core'.`);
        }
    }
    else {
        console.log(`✅ '.bmad-core' already exists.`);
    }
}
async function copyKiroTemplate() {
    const templatePath = path_1.default.resolve(__dirname, "..", "template", KIRO_DIR);
    const destinationPath = path_1.default.join(process.cwd(), KIRO_DIR);
    console.log(`📂 Copying '.kiro' boilerplate...`);
    try {
        await fs_extra_1.default.copy(templatePath, destinationPath);
        console.log(`✅ '.kiro' boilerplate copied successfully.`);
    }
    catch (error) {
        if (error instanceof Error) {
            throw new Error(`Failed to copy '.kiro' template: ${error.message}`);
        }
        throw new Error(`An unknown error occurred while copying the '.kiro' template.`);
    }
}
async function install() {
    const kiroPath = path_1.default.join(process.cwd(), KIRO_DIR);
    const kiroExists = await checkDirectoryExists(kiroPath);
    if (kiroExists) {
        throw new Error(`A '.kiro' directory already exists. Installation aborted to prevent overwriting.`);
    }
    await ensureBmadCore();
    await copyKiroTemplate();
}
