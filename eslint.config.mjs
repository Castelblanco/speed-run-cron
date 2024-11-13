import globals from 'globals';
import tseslint from 'typescript-eslint';
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';

export default [
    {
        files: ['**/*.{js,mjs,cjs,ts}'],
    },
    { languageOptions: { globals: globals.node } },
    ...tseslint.configs.recommended,
    eslintPluginPrettier,
    {
        ignores: ['node_modules', 'build', 'public', '.vscode', 'src-tauri'],
    },
];
