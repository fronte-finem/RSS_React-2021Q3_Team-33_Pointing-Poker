# [Pointing Poker][task]

Rolling Scopes School / React 2021Q3

---

- npm scripts:
  - Developing:
    - `npm run dev` - run dev-server for client
  - Building:
    - `npm run build` - run build for client
    - `npm run serve` - run static server for built client
  - Lint:
    - `npm run lint` - lint and fix code
    - `npm run test` - run jest
    - `npm run test:cover` - run jest with coverage check

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

[task]: https://github.com/rolling-scopes-school/tasks/blob/master/tasks/react/pointing-poker.md
[vite]: https://vitejs.dev/
[public]: https://vitejs.dev/guide/assets.html#the-public-directory
