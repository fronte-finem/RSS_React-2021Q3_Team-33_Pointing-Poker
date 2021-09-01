# [Pointing Poker][task]

Rolling Scopes School / React 2021Q3

---
Directories structure:
```text
project root
│
├───client
│   ├───src
│   │   └───...
│   ├───types
│   ...
├───public
├───server
│   ├───src
│   │   └───...
│   ...
...
├───index.html
...
```

---
- Builder: [vitejs][vite]
  - build to `/dist`
  - [specific of `public` folder][public]
---
- TS-config (import paths mapping):
  - `@client/*` => `client/src/*`
  - `@server/*` => `server/src/*`
---
- EsLint-config:
  - `airbnb` + `airbnb-typescript`
  - `plugin:react/recommended`
  - `plugin:prettier/recommended`
---
- npm scripts:
  - Developing:
    - `npm dev` - run dev-server for client
  - Building:
    - `npm build` - run build for client
    - `npm serve` - run static server for built client
  - Lint:
    - `npm lint:client` - lint and fix client code
    - `npm lint:server` - lint and fix server code
    - `npm lint` - lint and fix all
---

[task]: https://github.com/rolling-scopes-school/tasks/blob/master/tasks/react/pointing-poker.md
[vite]: https://vitejs.dev/
[public]: https://vitejs.dev/guide/assets.html#the-public-directory
