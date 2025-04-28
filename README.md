# Webstorm Error Template

Exports from typescript packages that are marked as `composite` are not picked up, re: usage detection.

## Setup

```shell
pnpm install
pnpm build
```

## Bugs

### Usage detection does not work for project references

- Line 1 of [App.tsx](./packages/consumer/src/app.tsx) should highlight `Example1` and navigate to it on ctrl+click. Its source symbol is not detected.
- [example-1.tsx](./packages/react-lib-1/src/components/example-1/example-1.tsx)
    - The component's usage in the dependent package is not detected.

The root tsconfig.json references a tsconfig.lib.json which is the TS config for the react-lib-1 package.

If the contents of tsconfig.json are changed to the contents of tsconfig.lib.json, the usage detection works.

Alternatively, the tsconfig.json just needs these settings to fix usage detection:

```json
{
  "files": [],
  "include": ["./src"],
  "compilerOptions": {
    "baseUrl": "./",
    "outDir": "./dist"
  },
  "references": [
    {
      "path": "./tsconfig.lib.json"
    }
  ]
}
```