import eslintJs from '@eslint/js';
import astroParser from 'astro-eslint-parser';
import astroPlugin from 'eslint-plugin-astro';
import tsParser from '@typescript-eslint/parser';

export default [
  eslintJs.configs.recommended,
  {
    files: ['**/*.astro'],
    plugins: {
      astro: astroPlugin
    },
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2023,
        extraFileExtensions: ['.astro'],
        parser: tsParser, // Use TypeScript parser for embedded TypeScript
        tsconfigRootDir: './', // Adjust as needed
        project: './tsconfig.json', // Adjust to your project's tsconfig.json location
      },
      globals: {
        Astro: 'readonly',
        Fragment: 'readonly',
        window: 'readonly',
        document: 'readonly'
      }
    },
    rules: {
      indent: ['error', 2],
      'linebreak-style': ['error', 'unix'],
      quotes: ['error', 'single'],
      semi: ['error', 'always']
    }
  }
];
