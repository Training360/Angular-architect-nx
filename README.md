# Angular-architect-nx

Architect-level Angular course about Nx workspaces

## Base setup for Angular

npx nx@latest init
✔ Where should your workspace be created? · false

> NX Let's create a new workspace [https://nx.dev/getting-started/intro]

✔ Where would you like to create your workspace? · airfield
✔ Which stack do you want to use? · angular
✔ Integrated monorepo, or standalone project? · integrated
✔ Application name · airfield
✔ Which bundler would you like to use? · esbuild
✔ Default stylesheet format · scss
✔ Do you want to enable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering)? · No

✔ Test runner to use for end to end (E2E) tests · playwright
✔ Enable distributed caching to make your CI faster · Yes

### Angular code generation

[code generation](https://nx.dev/angular-tutorial/1-code-generation)

### Graph

npx nx graph

### List all of commands

npx nx help
npx nx list @nx/angular

### CheetSheet

![CheetSheet](./CHEATSHEET.md)

### Serving

- npx nx serve --project <projectname>  
  or
- npx nx serve <projectname>

### Building

- npx nx build --project <projectname>  
  or
- npx nx build <projectname>

---

## Nx - Environment variables

- [Documentation](https://nx.dev/recipes/angular/use-environment-variables-in-angular)
- `npx nx@latest init` create a new Angular app as standalone with webpack builder
- Install @types/node for using process.env variables

```shell
npm install -D @types/node
```

- Update [project.json](./airfield-env/project.json)

```json
{
  "build": {
    // NOTE: change the executor to one that supports custom webpack config.
    "executor": "@nx/angular:webpack-browser",
    // snip
    "options": {
      // NOTE: This file needs to be created.
      "customWebpackConfig": {
        "path": "./webpack.config.js"
      }
      // snip
    }
  },
  "serve": {
    // NOTE: use dev-server that supports custom webpack config.
    "executor": "@nx/angular:dev-server"
    // snip
  }
}
```

- Create [webpack.config.js](./airfield-env/webpack.config.js)

```javascript
const webpack = require("webpack");

function getClientEnvironment() {
  // Grab NX_* environment variables and prepare them to be injected
  // into the application via DefinePlugin in webpack configuration.
  const NX_APP = /^NX_/i;

  const raw = Object.keys(process.env)
    .filter((key) => NX_APP.test(key))
    .reduce((env, key) => {
      env[key] = process.env[key];
      return env;
    }, {});

  // Stringify all values so we can feed into webpack DefinePlugin
  return {
    "process.env": Object.keys(raw).reduce((env, key) => {
      env[key] = JSON.stringify(raw[key]);
      return env;
    }, {}),
  };
}

module.exports = (config, options, context) => {
  // Overwrite the mode set by Angular if the NODE_ENV is set
  config.mode = process.env.NODE_ENV || config.mode;
  config.plugins.push(new webpack.DefinePlugin(getClientEnvironment()));
  return config;
};
```

- Create [.env](./airfield-env/.env)

```env
NX_API_URL=http://localhost:3333
NX_API_HOST=localhost
```

- Update tsconfig.app.json and tsconfig.spec.json

```json
"types": ["node"]
```

- Get an environment variable

```typescript
console.log('>>> NX_API_URL', process.env['NX_API_URL']);
console.log('>>> NX_API_HOST', process.env['NX_API_HOST']);
```

------------------------------
## Module Federation

