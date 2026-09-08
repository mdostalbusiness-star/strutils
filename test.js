const assert = require('assert');
const { titleCase, slugify, truncate } = require('./strutils');

assert.strictEqual(titleCase('hello world'), 'Hello World');
assert.strictEqual(titleCase('THE QUICK FOX'), 'The Quick Fox');

assert.strictEqual(slugify('Hello, World!'), 'hello-world');
assert.strictEqual(slugify('  Multiple   Spaces  '), 'multiple-spaces');

console.log('All tests passed.');
