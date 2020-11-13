# Node DRY

Reusable libraries for our node microservices. These packages do NOT contain any business knowledge, but pure reusable functionality that would repeat over all services.

The main repository can be found here: [JValue Open Data Service](https://github.com/jvalue/open-data-service)


## How to use
* add a `.npmrc` file with the following content to access our package registry
```
@jvalue:registry=https://npm.pkg.github.com
```
* add the packages to your `package.json` as usual

## Packages

| **Name** | **Package Name** | **Current Version** | **Description** |
|---|---|---|---|
| Basics | `@jvalue/node-dry-basics` | `0.0.1` | *all basic functionality that need no dependencies* |


## Contact us

If you have any questions or would like to contact us, you can easily reach us via gitter channel. Issues can be reported via GitHub.

## License

Copyright 2020 Friedrich-Alexander Universität Erlangen-Nürnberg.

Node-DRY is licensed under the Apache License, Version 2.0. See [LICENSE](/LICENSE) for the full license text.