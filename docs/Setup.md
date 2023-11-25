# Setup

This project uses a few tools. Let's set them up in order of the following:
  
  1. tailwindcss
  2. prettier
  3. eslint
  4. lint-staged
  5. husky

## Tailwind

You may install Tailwind with these steps:

1. Install tailwind.

    ```sh
    pnpm add -D tailwindcss && \
    pnpm add tailwindcss-animate
    ```

2. If it isn't created already, create a `tailwind.config.ts` file:

```ts
// tailwind.config.ts
/** @type {import('tailwindcss').Config} */
module.exports = {

}
```

## Prettier

To set up prettier, follow these steps:

1. Install prettier

    ```sh
    pnpm add -D prettier prettier-plugin-tailwindcss
    ```

2. Create a `.prettierrc` file:

    ```prettierrc
    {
      "plugins": [
        "prettier-plugin-tailwindcss"
      ]
    }
    ```
