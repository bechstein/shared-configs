# @bechstein/prettier-config

## Installation

To install the package, follow the steps below:

1. Install peer dependencies:

   ```bash
   npm i -D prettier
   ```

2. Install `@bechstein/prettier-config`:

   ```bash
   npm i -D @bechstein/prettier-config
   ```

## Usage

To use the configuration in a project, use **one** of the methods below:

- Reference the shared config in your `package.json`:

  ```json
  {
    "name": "@bechstein/connect",
    "version": "1.0.0",
    "prettier": "@bechstein/prettier-config"
  }
  ```

- Create a `.prettierrc.js`/`.prettierrc.mjs` file and add the following (ESM):

  ```js
  import cbdPrettierConfig from "@bechstein/prettier-config";

  export default {
    ...cbdPrettierConfig,
    //  override the configuration if needed
    // semi: false
  };
  ```

- Create a `.prettierrc.js`/`.prettierrc.cjs` file and add the following (CommonJS):

  ```js
  const cbdPrettierConfig = require("@bechstein/prettier-config");

  module.exports = {
    ...cbdPrettierConfig,
    //  override the configuration if needed
    // semi: false
  };
  ```

### Ignoring Files: .prettierignore

To exclude files from formatting, create a `.prettierignore` file in the root of your project.

```gitignore
**/ios/*.md
**/android/*.md
```

### Helper scripts

The following helper scripts can be added to `package.json`:

```json
{
  "scripts": {
    "prettier:check": "npx prettier . --check",
    "prettier:fix": "npx prettier . --write"
  }
}
```