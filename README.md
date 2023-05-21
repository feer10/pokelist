# Pokelist

This project of Pokemon from PokeAPI, contains a paginated list, and individual data of each pokemon. Everything is saved in a context. Plus a 404 redirect page. The project uses components from the P-lib library (https://github.com/feer10/p-lib).
You can go to a specific number of pokemon in the url and that page will be registered, for example: ```/pokemon/599```

The project has Eslint + prettier, Stylelint, tests with Vitest + React testing library, a tour with Cypress. Plus all of this runs on pre-commit with Husky.

## How to use this repo?

### 1. Clone or copy

Download the repo, cloning or copying it.

## Project setup
yarn 
### Environment

For running the project, you need to have installed the proper versions of node
and yarn.

When you are ready to start:

```bash
# Install node version with NVM if you are using it.
nvm install

# Then install yarn
npm install -g yarn@^1.22.10
```

### Dependencies

When you are all ready to go, proceed to install dependencies with yarn.

```bash
yarn
```

## Development scripts

### Compiles and hot-reloads for development

```bash
yarn dev
```

### Run your unit tests

```bash
yarn test
```

### Lints and fixes files

```bash
yarn lint
```

### Lints scss files

```bash
yarn lint:css
```

### Run cypress

```bash
yarn cypress:run
```

### Open cypress

```bash
yarn cypress:open
```


### Scaffolding
```
├── 📁 public
├── 📁 src/
│   ├── 📘 App.tsx
│   ├── 📘 main.tsx
│   ├── 📗 Routes.tsx
│   ├── 📁 assets
│   ├── 📁 components // Global components/
│   │   ├── 📁 Component/
│   │   │   ├── 💅 Component.scss
│   │   │   ├── 🧪 Component.spec.tsx
│   │   │   └── 📘 Component.tsx
│   ├── 📁 services/
│   │   └── 📘 service.ts
│   ├── 📁context/
│   │   └── 📘 context.tsx
│   │   └── 📘 context.spec.tsx
│   ├── 💅 styles // Global styles
│   ├── 📁 models // Global types declaration
│   ├── 📁 utils // Utility functions
│   ├── 📁 layouts // Global Layouts
│   ├── 📁 hooks // Global custom hooks
│   └── 🌅 features/
│       └── 📁 ParentComponent/
│           ├── 📁 components
│           ├── 📘 ParentComponent.tsx
│           └── 💅 ParentComponent.scss
├── 📁 .husky // Config for Husky
├── 📗 cypress // Config for test e2e
├── ⚙️ .eslintrc.cjs
├── ⚙️ .gitignore
├── ⚙️ .nvmrc
├── ⚙️ .prettierrc
├── 📕 Authors
├── ⚙️ commitlint.config.cjs
├── ⚙️ cypress.config.ts
├── 📘 index.html
├── 📕 package.json
├── 📜 README.md
├── ⚙️ stylelint.config.cjs
├── ⚙️ tsconfig.json
├── ⚙️ tsconfig.node.json
├── ⚙️ vite.config.ts
├── ⚙️ vitest.config.ts
├── ⚙️ vitest.setup.ts
└── 🧶 yarn.lock
```
