module.exports = {
    parser: '@typescript-eslint/parser', // allows ESLint to understand TypeScript
    parserOptions: {
        // configures modern parsing (recent ECMAScript, modules, JSX)
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    // Load predefined rules to avoid writing everything by hand
    // including HTML accessibility best practices (a11y), disabling ESLint rules that would conflict with Prettier
    extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:jsx-a11y/recommended', 'prettier'],
    rules: {
        'react/react-in-jsx-scope': 'off' // Disables the rule that requires importing React in every file (not needed with React 17+)
    },
    settings: {
        // Allows ESLint to automatically detect the version of React being used
        react: {
            version: 'detect'
        }
    }
};
