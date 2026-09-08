# strutils

A tiny collection of string utility functions, used to practice the pull request workflow.

## Functions

- `titleCase(str)` — capitalizes the first letter of each word.
- `slugify(str)` — converts a string into a URL-friendly slug.
- `truncate(str, maxLength)` — shortens a string to a maximum length, adding an ellipsis if truncated.

## Usage

```js
const { titleCase, slugify, truncate } = require('./strutils');

titleCase('hello world');       // "Hello World"
slugify('Hello, World!');       // "hello-world"
truncate('Hello, World!', 5);   // "Hello…"
```

## Tests

Run the test suite with:

```bash
node test.js
```
