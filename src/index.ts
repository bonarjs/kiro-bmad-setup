import { Command } from "commander";
import { install } from "./installer";

const program = new Command();

program
  .name("kiro-bmad-setup")
  .description("A CLI tool to set up BMAD methodology for the Kiro IDE.");

program
  .command("install")
  .description("Install and configure the .kiro boilerplate.")
  .action(async () => {
    try {
      await install();
      console.log("✅ BMAD for Kiro setup completed successfully!");
    } catch (error) {
      if (error instanceof Error) {
        console.error("❌ An error occurred during setup:", error.message);
      } else {
        console.error("❌ An unknown error occurred during setup.");
      }
      process.exit(1);
    }
  });

program.parse(process.argv);
