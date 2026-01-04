// @ts-check
import eslint from '@eslint/js'
import { defineConfig } from 'eslint/config'
import tseslint from 'typescript-eslint'
import eslintConfigPrettier from 'eslint-config-prettier'
export default defineConfig(
    // Ignore patterns
    {
        ignores: [
            'node_modules/**',
            'dist/**',
            'build/**',
            '*.config.js',
            '*.config.ts',
            'commitlint.config.js',
            'eslint.config.js'
        ]
    },

    {
        files: ['**/*.ts', '**/*.tsx'],
        languageOptions: {
            parserOptions: {
                project: true,
                tsConfigRootDir: import.meta.dirname
            }
        },
        extends: [
            eslintConfigPrettier,
            eslint.configs.recommended,
            ...tseslint.configs.recommended
        ],
        rules: {
            'no-console': 'error',
            'no-unused-vars': 'off',
            semi: ['error', 'never'],
            quotes: [
                'error',
                'single',
                {
                    avoidEscape: true,
                    allowTemplateLiterals: false
                }
            ]
        }
    }
)
