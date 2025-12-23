# Buymed Test Website

Model: Buymed Test

## Website

## Install

Node.js >= 18

```bash
yarn
```

## Run localhost

```bash
yarn dev
```

## Build Project

```bash
yarn build
yarn start
```

## State Management & Component Structure

### State Management (Redux)

This project uses Redux to manage global state

Structure example:

```bash
/store
  ├── index.ts
  ├── rootSaga.ts
  ├── rootReducer.ts
  └── products
      └── action.ts
      └── reducer.ts
      └── sagas.ts
      └── types.ts
```

### Component Structure

```bash
/src
  /pages
    ├── _app.tsx
    ├── index.tsx
    ├── _documnent_.tsx
    └── products
        └── index.tsx
  /views
    ├── Products
  /components
    ├── UIComponent
    ├── FeatureComponent
  /layouts
    ├── MainLayout
    ├── RootLayout
  /guards
    ├── AuthGuard.tsx
  /libs
    ├── appYup
    ├── axios
    ├── index.ts
  /services
    ├── jwt
    ├── alertDialog
    ├── eventBus.ts
  /store
    ├── index.ts
    ├── rootSaga.ts
    ├── rootReducer.ts
    └── products
        └── action.ts
        └── reducer.ts
        └── sagas.ts
        └── types.ts
  /theme
  /types
    ├── app.d.ts
    ├── theme.d.ts
  /hook
    ├── useCustomHook.tsx
  /utils
    ├── api
    ├── config
    ├── constants
    ├── fonts
    ├── helpers
```

### Responsive Design Notes

Responsive design is implemented mainly using Material UI’s system.

Key Decisions

MUI Grid & Box are used for layout responsiveness.

Breakpoints (xs, sm, md, lg, xl) are applied to control layout behavior.

useMediaQuery is used for conditional rendering on different screen sizes.

Mobile-first approach is followed to ensure better performance on smaller devices.

Example:

```
<Grid container spacing={2}>
  <Grid item size={{ xs: 12, md: 6 }}>
    ...
  </Grid>
</Grid>
```

### Main Tech Stack

Next.js (Page Router)
React
Material UI (MUI)
Redux
TypeScript
