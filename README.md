# Node DRY

Reusable libraries for our node microservices. These packages do NOT contain any business knowledge, but pure reusable functionality that would repeat over all services.


## How to use
* add a `.npmrc` file with the following content to access our package registry
```
//npm.pkg.github.com/:_authToken=333cf0da6c93b421def514a270da8e8c2e22d3be
registry=https://npm.pkg.github.com/jvalue
```
* add the packages to your `package.json` as usual

## Packages

| **Name** | **Package Name** | **Current Version** | **Description** |
|---|---|---|---|
| Basics | `@jvalue/node-dry-basics` | `0.0.1` | *all basic functionality that need no dependencies* |
