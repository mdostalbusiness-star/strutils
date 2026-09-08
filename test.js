const assert = require('assert');
const { titleCase, slugify, truncate } = require('./strutils');

assert.strictEqual(titleCase('hello world'), 'Hello World');
assert.strictEqual(titleCase('THE QUICK FOX'), 'The Quick Fox');

assert.strictEqual(slugify('Hello, World!'), 'hello-world');
assert.strictEqual(slugify('  Multiple   Spaces  '), 'multiple-spaces');

assert.strictEqual(truncate('Hello, World!', 5), 'Hello…');
assert.strictEqual(truncate('Hi', 5), 'Hi');

console.log('All tests passed.');
