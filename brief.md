# Project Brief: kiro-bmad-setup NPX Installer

## 1. Executive Summary

This document outlines the project plan to package and distribute a robust integration of the Breakthrough Method for Agile AI-Driven Development (BMAD) for the Kiro IDE. The core of this project involves leveraging a set of **pre-existing, Claude-generated artifacts and extensive mapping documentation located in `~/.kiro`**. Our primary goal is to adapt, validate, and package these proven assets into a user-friendly, one-command command-line tool (CLI). Executed via `npx`, this tool will install a self-contained `.kiro` directory containing the refined Kiro-native artifacts and a bundled copy of the official `.bmad-core`, ensuring a seamless and reliable setup experience for any developer.

## 2. Project Goals (OKRs)

**Objective: To package the existing, validated BMAD integration artifacts into a simple, one-command installer for the Kiro IDE.**

*   **Key Result 1:** All core BMAD agent roles, as defined in the Claude artifacts, are fully functional via Kiro's chat after installation.
*   **Key Result 2:** The automated workflows from the existing hooks are successfully packaged and operational, covering at least 80% of the core BMAD development cycle events.
*   **Key Result 3:** The existing guided workflows are successfully adapted into Kiro Spec templates, enabling users to complete the BMAD "Planning Workflow".
*   **Key Result 4:** The `npx kiro-bmad-setup install` command successfully bootstraps a project with the complete, adapted, and validated set of artifacts.

## 3. Target Audience

*   TypeScript/JavaScript developers using the Kiro IDE.
*   Development teams adopting the BMAD methodology who want a zero-configuration setup within Kiro.
*   Users of the `bmad-method` who want to leverage its capabilities within a dedicated IDE environment.

## 4. Scope

### In Scope

*   **Analysis and Adaptation:** Analyze the existing artifacts and documentation in `~/.kiro` and adapt them for packaging.
*   **CLI Tool Development:** Develop the package as an npm-executable CLI tool (via `npx`).
*   **Content Bundling:** Create a `build` script that clones the `BMAD-METHOD` GitHub repository and bundles the `bmad-core` artifacts into our package.
*   **Installer Script:** Create an `install` script that copies the bundled and adapted `.kiro` directory into the user's project.
*   **Documentation:** Synthesize the existing mapping documentation into a clear `README.md` and `AGENT_USAGE.md` for the final package.

### Out of Scope

*   Fundamental re-architecture of the existing Claude-generated artifacts. The goal is to adapt, not reinvent.
*   Functionality as an installable npm dependency (`npm install kiro-bmad-setup`). The tool is designed exclusively for `npx` execution.
*   Support for IDEs other than Kiro.

## 5. High-Level Technical Approach: NPX-based Installer

The strategy is to treat the Claude-generated artifacts as the foundational source code for our Kiro integration layer.

1.  **Initial Asset Integration:** The first step is to copy the relevant artifacts from `~/.kiro` into our project's `template/.kiro` directory. This includes the `hooks`, `specs`, and `steering` files.
2.  **Distribution Model:** The `package.json` will be configured with a `bin` field, pointing to our `install.js` script, making the package executable via `npx`.
3.  **Content Bundling (Build Phase):** Before publishing, a `build` script (`scripts/bundle-bmad-core.js`) will be triggered. This script will `git clone` the official `BMAD-METHOD` repository and copy its `bmad-core` subfolder into `template/.kiro/.bmad-core`, alongside our adapted Kiro artifacts.
4.  **User Installation (Install Phase):** When a user runs `npx kiro-bmad-setup install`, the `install.js` script copies the entire pre-populated `template/.kiro` directory into the root of the user's project.

## 6. Key Features (Epics)

*   **Epic 1: Adapt and Validate Core Agent Integration**
    *   *Story:* As a developer, I can interact with all standard BMAD agents as defined in the Claude artifacts.
    *   *Tasks:* Review the existing steering files from `~/.kiro`. Validate and update their file references to point to the bundled `.kiro/.bmad-core/` directory.

*   **Epic 2: Package Automated Workflow Hooks**
    *   *Story:* As a Product Owner, when I save a story file, the existing Kiro hook for validation is triggered correctly.
    *   *Tasks:* Test the existing `.hook` files. Ensure all file paths for prompts and context are relative and robust within the packaged `.kiro` directory structure.

*   **Epic 3: Formalize Guided Workflows with Kiro Specs**
    *   *Story:* As a PM, I can use a Kiro Spec template based on Claude's workflow definitions to create a `prd.md`.
    *   *Tasks:* Convert the workflow concepts from the existing documentation and artifacts into formal Kiro Spec templates.

*   **Epic 4: Build the One-Command Installer**
    *   *Story:* As a user, I can run `npx kiro-bmad-setup install` to get a fully functional BMAD environment based on the proven Claude setup.
    *   *Tasks:* Develop the `install.js` CLI script and the `scripts/bundle-bmad-core.js` build script.

## 7. Risks and Mitigation

*   **Risk 1 (High):** The structure of the `BMAD-METHOD` GitHub repository changes, breaking our build script.
    *   **Mitigation:** The build script will validate that the `bmad-core` directory exists at the expected path after cloning, failing gracefully if it doesn't.
*   **Risk 2 (Medium):** The Claude-generated artifacts may have hardcoded paths or assumptions that are difficult to adapt for a general-purpose installer.
    *   **Mitigation:** Dedicate an initial "analysis and refactoring" spike (part of Epic 1) to identify and parameterize all hardcoded values within the artifacts before proceeding.
*   **Risk 3 (Medium):** `git` is not installed on the machine building the package.
    *   **Mitigation:** Document `git` as a development prerequisite. The build script will check for the `git` command and fail with an informative message if it's absent.

## 8. Stakeholders

*   **Project Lead:** Bacelar
*   **AI Agent (Implementation):** Expert Engineer AI
*   **Target Users:** Bonar Digital Development Team & Public Users of Kiro/BMAD