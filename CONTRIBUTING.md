:+1::tada: First off, thanks for taking the time to contribute! :tada::+1:

# Coding Style Guidelines

This project uses [idiomatic.js](https://github.com/rwaldron/idiomatic.js/) as its style guide. Where no preference is specified, use the following guidelines:

* **Strings**
  * single-quoted
* **Objects**
  * Values should be aligned:

```javascript
{
  "foo":          true,
  "someOtherFoo": false
}
```
* **Variables**
  * One `var` per declaration.
  * Only use `let` or `const` for variable declarations.

## Hinting

Both a `.jscsrc` and `.eslintrc` are provided for convenience.

## Auto-formatting

### JSCS

Simply run `jscs -x <filename>` against a source file to autoformat it.

### ESLint

Similarly, running `eslint
### WebStorm

The project [techpeace/webstorm-idiomaticjs-formatter](https://github.com/techpeace/webstorm-idiomaticjs-formatter) provides an Idiomatic.js style configuration file for use with WebStorm.


