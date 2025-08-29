# Project Brief: Kiro BMAD Setup

## Executive Summary
This project is an NPX installer that configures a boilerplate `.kiro` directory to seamlessly integrate the BMAD methodology into the Kiro IDE. It solves the complex, error-prone manual setup process by providing a standardized, one-command installation for developers and teams adopting BMAD within Kiro. The key value is a zero-configuration setup that saves time and ensures a correct, up-to-date integration.

## Problem Statement
The manual process of integrating the BMAD method with the Kiro IDE is complex and requires developers to correctly structure multiple directories and configuration files. This is time-consuming, prone to errors, and creates a barrier to adoption. A standardized, automated setup is needed to ensure consistency and speed up project initialization.

## Proposed Solution
A command-line NPX package, `kiro-bmad-setup`, will provide a single command (`install`) to automate the entire setup. The script will first ensure the project has the `.bmad-core` dependencies (installing them if necessary) and then copy a pre-configured `.kiro` boilerplate directory into the user's project root.

## Target Users
- **Primary User Segment:** Developers and teams using the Kiro IDE who want to adopt the BMAD methodology for AI-assisted development.

## Goals & Success Metrics
### Business Objectives
- Simplify the adoption of BMAD within the Kiro IDE.
- Reduce setup time from minutes/hours to seconds.
- Ensure a consistent and correct integration structure across all projects.

### Key Performance Indicators (KPIs)
- **Installations:** Number of successful `npx kiro-bmad-setup install` executions.
- **Time to Setup:** Time taken for the command to run successfully (target: < 30 seconds).

## MVP Scope
### Core Features (Must Have)
1.  Check for the `.bmad-core` directory at the project root.
2.  If `.bmad-core` is missing, execute `npx bmad-method install` automatically.
3.  Copy the entire contents of the `template/.kiro` directory to the project root.
4.  Display clear success or failure messages upon completion.

### Out of Scope for MVP
- Customization options during installation (e.g., selecting specific hooks).
- Updating an existing `.kiro` installation (MVP is for clean installs only).
- GUI-based interactions.

## Technical Considerations
### Platform Requirements
- **Target Platforms:** Cross-platform (Linux, macOS, Windows) via Node.js/NPX.

### Technology Preferences
- **Language:** TypeScript
- **CLI Framework:** commander.js
- **File System:** fs-extra
- **Command Execution:** execa

## Constraints & Assumptions
### Constraints
- **Timeline:** The initial MVP should be completed rapidly.
- **Technical:** Must rely only on Node.js and publicly available npm packages.

### Key Assumptions
- The user has Node.js and NPX installed and available in their PATH.
- The `npx bmad-method install` command is available and works as expected.
- A clean copy of the `.kiro` directory is sufficient for a successful integration.
