# @bechstein/angular-eslint-config

_A shareable ESLint configuration tailored for Angular projects._

## Installation

To install the package, follow these steps:

### Install Peer Dependencies

Before installing this package, make sure you have the required peer dependencies installed:

```bash
npm install --save-dev eslint @eslint/js typescript typescript-eslint angular-eslint eslint-config-prettier
```

### Install `@bechstein/angular-eslint-config`

```bash
npm install --save-dev @bechstein/angular-eslint-config
```

## Usage

To apply this ESLint configuration, create an ~~`eslint.config.js`~~/`eslint.config.mjs` file and include the following setup:

```js
import cbdAngular from "@bechstein/angular-eslint-config";
import tseslint from "typescript-eslint";

export default tseslint.config(...cbdAngular, {
  languageOptions: {
    parserOptions: {
      project: ["**/tsconfig*.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

## Helper Scripts

Add the following scripts to your `package.json` to simplify linting:

```json
{
  "scripts": {
    "eslint": "npx eslint",
    "lint": "npm run eslint -- .",
    "fmt": "npm run eslint -- . --fix"
  }
}
```

## 💡 WebStorm Integration

To enable ESLint in WebStorm (and run it automatically on save):

1. Open **Settings**.
2. Navigate to **Languages & Frameworks → ESLint**.
3. Enable ESLint and set it up for your project.
