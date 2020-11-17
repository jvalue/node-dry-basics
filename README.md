# Node DRY

Reusable libraries for our node microservices. These packages do NOT contain any business knowledge, but pure reusable functionality that would repeat over all services.

The main repository can be found here: [JValue Open Data Service](https://github.com/jvalue/open-data-service)


## How to use

Add the packages to your `package.json` as usual or use `npm install --save <package-name>`


## Packages

| **Name** | **Package Name** | **Current Version** | **Description** |
|---|---|---|---|
| Basics | `@jvalue/node-dry-basics` | `0.0.3` | *all basic functionality that need no dependencies* |
| Postgres | `@jvalue/node-dry-pg` | `0.0.1` | *postgres helpers and the pg package* |


## License

Copyright 2020 Friedrich-Alexander Universität Erlangen-Nürnberg.

Node-DRY is licensed under the Apache License, Version 2.0. See [LICENSE](/LICENSE) for the full license text.