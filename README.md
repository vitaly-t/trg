Template Range Generators
-------------------------

ES6 Template String - based generators for a range of numbers or letters.

**NOTE:** Currently, supporting only numbers, and only for Node.js 6.0 and later.

## Install

```
$npm install trg
```

## Usage

```js
const _i = require('trg').int; // integer range generator
```

Using local `_i` generator:

```js
_i`#${-3}, ${2}%`;
//=> #-3%, #-2%, #-1%, #0%, #1%, #2%

_i`$${1}, ${8}`;
//=> $1, $2, $3, $4, $5, $6, $7, $8

_i`x${8}; ${1}`;
//=> x8; x7; x6; x5; x4; x3; x2; x1
```

Integer generator expects the following inside the string template:

1. Optional prefix
2. Starting value
3. Optional separator
4. End value
5. Optional suffix
