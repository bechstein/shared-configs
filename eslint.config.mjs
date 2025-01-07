import globals from "globals";
import js from "@eslint/js";

export default {
    ...js.configs.all,
    languageOptions: {
        globals: {
            ...globals.node
        }
    }
};