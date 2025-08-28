# EPIC-4.1: Create the Build Script for Bundling bmad-core

## User Story
**As a** developer of `kiro-bmad-setup`,
**I need** a build script that automatically fetches the `bmad-core` artifacts from the official GitHub repository,
**so that** our NPX package always bundles the correct, up-to-date version of the core BMAD files.

---

## Acceptance Criteria

1.  **Script Creation:** A new Node.js script must exist at `scripts/bundle-bmad-core.js`. A new directory `scripts/` should be created if it doesn't exist.
2.  **Cloning Functionality:** When executed, the script must successfully `git clone` the `BMAD-METHOD` repository from `https://github.com/bmad-code-org/BMAD-METHOD.git` into a temporary local directory (e.g., `./tmp-bmad-repo`). The clone should be a shallow clone (`--depth 1`) for efficiency.
3.  **Artifact Copying:** The script must recursively copy the `bmad-core` directory from the temporary cloned repository into the `template/.kiro/.bmad-core/` directory.
4.  **Cleanup:** The script must completely remove the temporary repository directory after the copy operation is finished, regardless of whether the script succeeded or failed.
5.  **Idempotency:** The script must run without errors even if the `template/.kiro/.bmad-core/` or temporary directories already exist, by cleaning them up before starting.
6.  **`package.json` Integration:** The `package.json` file must be updated to include:
    -   A `"build"` script that executes `node scripts/bundle-bmad-core.js`.
    -   A `"prepublishOnly"` script that runs `npm run build` to ensure the bundling happens before publishing to npm.
7.  **Logging:** The script must provide clear console output indicating its progress (e.g., "Cloning repository...", "Copying bmad-core...", "Cleanup complete.").

---

## Technical Notes

-   **Node.js Modules:** Use built-in Node.js modules like `fs/promises` for file system operations and `child_process` (specifically `exec` or `spawn`) for running the `git` command.
-   **Dependencies:** Avoid adding new npm dependencies if possible. `fs.rm` with the `{ recursive: true, force: true }` option can replace the need for packages like `rimraf`.
-   **Error Handling:** The script should use `try...catch...finally` blocks to ensure cleanup happens even if cloning or copying fails.
-   **Repository URL:** The GitHub URL should be a constant at the top of the file for easy maintenance.
-   **Paths:** Use the `path` module to construct file paths to ensure cross-platform compatibility.

---

## Dev Notes

*(To be filled in by the developer upon completion)*

---

## QA Notes

*(To be filled in by the QA agent upon review)*