# @bechstein/prettier-config

_A shareable Prettier configuration for consistent code formatting._

## Installation

To install the package, follow these steps:

### Install Peer Dependencies

Before installing this package, ensure you have Prettier installed:

```bash
npm install --save-dev prettier
```

### Install `@bechstein/prettier-config`

```bash
npm install --save-dev @bechstein/prettier-config
```

## Usage

You can apply this Prettier configuration using **one** of the following methods:

### 🔹 **1. Reference in `package.json`**
Add the configuration reference in your `package.json` file:

```json
{
  "name": "@bechstein/repo",
  "version": "1.0.0",
  "prettier": "@bechstein/prettier-config"
}
```

### 🔹 **2. Use `.prettierrc.js` / `.prettierrc.mjs` (ESM)**
Create a `.prettierrc.js` or `.prettierrc.mjs` file with the following content:

```js
import cbdPrettierConfig from "@bechstein/prettier-config";

export default {
  ...cbdPrettierConfig,
  // Override the configuration if needed
  // semi: false
};
```

### 🔹 **3. Use `.prettierrc.js` / `.prettierrc.cjs` (CommonJS)**
For projects using CommonJS, create a `.prettierrc.js` or `.prettierrc.cjs` file:

```js
const cbdPrettierConfig = require("@bechstein/prettier-config");

module.exports = {
  ...cbdPrettierConfig,
  // Override the configuration if needed
  // semi: false
};
```

## Ignoring Files with `.prettierignore`

To exclude specific files or directories from formatting, create a `.prettierignore` file in your project's root:

```gitignore
**/dist
**/node_modules
**/.angular
**/android
**/ios
```

---

## Helper Scripts

Add the following scripts to your `package.json` to automate formatting:

```json
{
  "scripts": {
    "prettier": "npx prettier",
    "check": "npm run prettier -- . --check",
    "fix": "npm run prettier -- . --write"
  }
}
```

## WebStorm Integration

To enable Prettier in WebStorm and automatically format files on save:

1. Open **Settings**.
2. Navigate to **Languages & Frameworks → Prettier**.
3. Enable Prettier and configure it for your project.
