# giftbit-ruleslib
Expression-evaluation library for Redemption Rules, Reaction Rules, et al

## Requirements

- npm >= 5.0
- gradle 2.14
- groovy 2.4.4

`npm install` to fetch all TypeScript/JavaScript dependencies.

## Project structure

This library is a bit weird because it contains source code for both Groovy and TypeScript/JavaScript.

```text
├── distjs              ← TS/JS distribution files
└── src
    ├── main
    │   ├── antlr       ← grammar source
    │   ├── groovy      ← Groovy implementation
    │   ├── resources
    │   └── typescript  ← TS implementation & generated JS
    └── test
        ├── groovy      ← Groovy test code
        ├── resources   ← test data
        └── typescript  ← TS test code
```

Generated JavaScript is checked into the repo because JS build systems don't play well with separate generated src dirs.  In particular Mocha was a problem.  Distribution JavaScript is checked into the repo so that it can be consumed as an NPM dependency straight from GitHub.

Generated Java is *not* checked into the repo because the build system doesn't require it.  Compiled Java is *not* checked in to the repo because the JAR is consumed as a private Maven repo from an S3 bucket.

## Development

### Grammar changes

Grammar changes should be extremely rare, reviewed and unit tested thoroughly.

- Generate JS files: `gradle generateJavaScriptGrammarSource`
- Add test statements to `src/test/resources/SyntaxTests.txt`
- Release

### New functions

- Add function implementations to both languages
- Add test statements to `src/test/resources/FunctionTests.txt`
- Release

### Releasing

- Bump version in `package.json`
    - non-breaking bug fixes bump the micro version
    - non-breaking features bump the minor version
    - breaking changes bump the major version
- Run Java tests: `gradle test`
- Run TS tests: `npm run test`
- Run TS lint: `npm run lint`
- Publish Java: `gradle publish`
- Publish TS:
    - `npm run build`
    - commit to GitHub
    - [create a release in GitHub](https://github.com/Giftbit/giftbit-ruleslib/releases/new) matching the `package.json` version
