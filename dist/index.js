"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const installer_1 = require("./installer");
const program = new commander_1.Command();
program
    .name("kiro-bmad-setup")
    .description("A CLI tool to set up BMAD methodology for the Kiro IDE.");
program
    .command("install")
    .description("Install and configure the .kiro boilerplate.")
    .action(async () => {
    try {
        await (0, installer_1.install)();
        console.log("✅ BMAD for Kiro setup completed successfully!");
    }
    catch (error) {
        if (error instanceof Error) {
            console.error("❌ An error occurred during setup:", error.message);
        }
        else {
            console.error("❌ An unknown error occurred during setup.");
        }
        process.exit(1);
    }
});
program.parse(process.argv);
