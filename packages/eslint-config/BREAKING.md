# Breaking Changes

This document outlines the breaking changes introduced in the package. Review this guide to update your project.

---

## **Version 2.0.0**

1. **Changes to `exports` Structure**
    - The `exports` field has been updated to include additional module paths for specific configurations:
        - New sub-paths:
            - `./angular`
            - `./typescript/recommended`
            - `./typescript/strict`
        - Each path now explicitly defines `import` and `require` entry points.

   **Migration Guide:**
    - Update your imports to use the new paths:
      ```javascript
      // Before
      import config from "@bechstein/eslint-config";
 
      // After
      import angularConfig from "@bechstein/eslint-config/angular";
      import tsRecommended from "@bechstein/eslint-config/typescript/recommended";
      import tsStrict from "@bechstein/eslint-config/typescript/strict";
      ```

2. **Added `peerDependenciesMeta` for Optional Peer Dependencies**
    - `angular-eslint` is now marked as optional in the `peerDependenciesMeta` field.

   **Impact:** If your project does not use `angular-eslint`, you can safely omit it without triggering peer dependency warnings.
