# @hakatashi/eslint-config

## Install

    npm install @hakatashi/eslint-config --save-dev

or

    yarn add @hakatashi/eslint-config --dev

## Usage

In your `eslint.config.mjs`:

```js
import hakatashi from '@hakatashi/eslint-config';

// Or for typescript
import hakatashi from '@hakatashi/eslint-config/typescript.js';

export default [
    ...hakatashi,

    {
        // Your ESLint config
    },
];
```