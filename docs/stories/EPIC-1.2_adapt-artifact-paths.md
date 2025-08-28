# EPIC-1.2: Adapt Artifact Paths for Packaging

## User Story
**As a** developer of `kiro-bmad-setup`,
**I need to** review and update all file references within the copied Kiro artifacts,
**so that** they use relative paths that are valid within the final packaged `.kiro` directory structure.

---

## Acceptance Criteria

1.  **Path Audit Completed:** A comprehensive search must be conducted across all copied artifacts (`.hook` files, `steering/**/*.md`, `specs/**/*.md`) to identify all hardcoded or absolute file paths, specifically those using the `#[[file:]]` syntax.
2.  **Internal Paths Corrected:** All references between Kiro artifacts (e.g., a hook referencing a steering file) must be updated to be relative to the `.kiro` directory root. For example, a reference should be `steering/agents/po-agent.md`, not `~/.kiro/steering/agents/po-agent.md` or `../steering/agents/po-agent.md`.
3.  **BMAD-Core Paths Standardized:** All references to the BMAD core artifacts must be updated to point to the future bundled location. For example, a reference to the core PO agent must be exactly `#[[file:.bmad-core/agents/po.md]]`.
4.  **Validation:** A `grep` for `~/.kiro/` and other absolute path indicators within the `template/.kiro/` directory must return no results.
5.  **Functionality Preserved:** The relationships between files must be preserved, ensuring that the adapted paths correctly link the components (e.g., hooks still point to the correct agent personas).

---

## Technical Notes

-   **Files to Inspect:**
    -   `template/.kiro/hooks/*.hook`
    -   `template/.kiro/steering/**/*.md`
    -   `template/.kiro/specs/templates/**/*.md`
-   **Search Pattern:** Use `grep` or a similar tool to find all occurrences of `#[[file:]]`.
-   **Path Logic:** Kiro resolves `#[[file:]]` paths from the `.kiro` directory root. Therefore, all paths should be written as if the current working directory is `.kiro`.
    -   **Correct:** `steering/context/project-context.md`
    -   **Correct:** `.bmad-core/agents/dev.md`
    -   **Incorrect:** `../steering/context/project-context.md`
    -   **Incorrect:** `/home/user/.kiro/steering/context/project-context.md`

---

## Dev Notes

**2024-05-24 - Developer:**
- **Audit Complete:** Performed a comprehensive `grep` across all files in `template/.kiro/` to find all `#[[file:]]` references.
- **Findings:** The vast majority of file references were already correctly structured for packaging.
    - References to `.bmad-core` artifacts were already using the correct relative path (e.g., `#[[file:.bmad-core/agents/agent.md]]`).
    - References within `.hook` files were correct.
    - References within `.md` spec templates were correct.
- **Corrections Made:** The only required change was to update the spec path references within the 10 agent steering files (`template/.kiro/steering/agents/*.md`). The redundant `.kiro/` prefix was removed.
    - **Before:** `#[[file:.kiro/specs/{spec-name}/requirements.md]]`
    - **After:** `#[[file:specs/{spec-name}/requirements.md]]`
- **Validation:** A `grep` for `~/.kiro/` and `file:.kiro/` now yields no results in the relevant files, confirming that all paths are correctly relative to the `.kiro` root. The adaptation is complete.

**Status:** Ready for Review.

---

## QA Notes

*(To be filled in by the QA agent upon review)*