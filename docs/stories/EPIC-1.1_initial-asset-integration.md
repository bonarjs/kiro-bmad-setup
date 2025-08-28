# EPIC-1.1: Initial Asset Integration

## User Story
**As a** developer of `kiro-bmad-setup`,
**I need to** copy the existing Claude-generated artifacts from `~/.kiro` into the project's template structure,
**so that** they can be version-controlled, adapted, and prepared for packaging.

---

## Acceptance Criteria

1.  **Directory Structure Created:** A `template/.kiro/` directory must be successfully created inside the `kiro-bmad-setup` project root.
2.  **Artifacts Copied:** The following directories and their entire contents must be recursively copied from the source `~/.kiro` directory to the new `template/.kiro/` directory:
    - `hooks/`
    - `settings/`
    - `specs/`
    - `steering/`
3.  **Source Integrity:** The copied files must be an exact replica of the source files.
4.  **Exclusions:** Any directories not listed above, especially hidden ones like `.kiro` inside `~/.kiro`, must be excluded from the copy.
5.  **Version Control:** The newly created `template/` directory and all its contents must be added to the git stage, ready for the initial commit.

---

## Technical Notes

-   **Source Path:** `~/.kiro/`
-   **Destination Path:** `./template/.kiro/`
-   This is a foundational task. The goal is to bring the existing assets into the project as-is. Refactoring and path adjustments will be handled in subsequent stories.
-   The command-line tool `cp -r` is sufficient for this task. For example: `cp -r ~/.kiro/hooks ./template/.kiro/`.

---

## Dev Notes

**2024-05-24 - Developer:**
- Created the directory structure `./template/.kiro/`.
- Copied the following directories from the source `~/.kiro` into the new template structure:
    - `hooks/`
    - `settings/`
    - `specs/`
    - `steering/`
- All source artifacts are now successfully integrated into the project's template, ready for adaptation and packaging.
- Performed an initial analysis of `template/.kiro/steering/README.md`. This file appears to be a comprehensive project status report and documentation of the original Claude-led implementation, confirming that our primary task is to adapt and package this existing, feature-complete solution.

**Status:** Ready for Review.

---

## QA Notes

*(To be filled in by the QA agent upon review)*