# semver-comparator-circular-dependency-example

An example project to show a circular dependency in the semver npm package.An example project to show a circular dependency in the semver npm package.

When building another project setup in a similar way I did see the following error (what is below is a snippet of the error).

```text
[!] RollupError: Circular dependency: ../../common/temp/node_modules/.pnpm/semver@7.6.2/node_modules/semver/classes/comparator.js -> ../../common/temp/node_modules/.pnpm/semver@7.6.2/node_modules/semver/classes/range.js -> ../../common/temp/node_modules/.pnpm/semver@7.6.2/node_modules/semver/classes/comparator.js
```

However, I am unable to reproduce it in this project.
