## Demo of ES2020 export * as ns Syntax

See: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-8.html

### Install
```
yarn install
```
### Build
```
npx webpack
```
There should be no build errors. A small loader 'loaderPrint' has been added after ts-loader to enable you to see the output after ts-loader has transpiled the file. 

If you change module in tsconfig to "ES2020" you will see a build error:
```
{
    "compilerOptions": {
      "module": "ES2020",
      "noImplicitAny": true
    },
}
```
Build error:
```
ERROR in ./index.ts 3:9
Module parse failed: Unexpected token (3:9)
File was processed with these loaders:
 * ./loaderPrint.js
 * ./node_modules/ts-loader/index.js
You may need an additional loader to handle the result of these loaders.
| export * from './lib/config';
| export * from './generated';
> export * as Static from './lib/static';
| 
```
You will see from the output of loaderPrint that ts-loader emitted the export statement in the ES2020 syntax:
```
export * as Static from './lib/static';
```
Webpack and Node currently do not understand this which is why the build error occurs.  If you set module to "ES6" in tsconfig.json the statement is transpiled as:
```
import * as Static_1 from './lib/static';
export { Static_1 as Static };
```
With this change the build succeeds.