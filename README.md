Template Range Generators
-------------------------

ES6 Template String - based generators for a range of numbers or letters.

[![Build Status](https://travis-ci.org/vitaly-t/trg.svg?branch=master)](https://travis-ci.org/vitaly-t/trg)
[![Coverage Status](https://coveralls.io/repos/vitaly-t/trg/badge.svg?branch=master)](https://coveralls.io/r/vitaly-t/trg?branch=master)

**NOTE:** Currently supporting only integers, and only for Node.js 4.0 and later.

## Install

```
$npm install trg
```

## Usage

```js
const IR = require('trg').int; // Integer Range generator
```

* Simple `{1, 7}` range:

```js
IR`${1}${7}`;
//=> 1234567
```

* Range `{1, 7}`, with prefix `$` and `, ` separator:

```js
IR`$${1}, ${7}`;
//=> $1, $2, $3, $4, $5, $6, $7
```

* Reversed range `{7, 1}`, with step `2` and `, ` separator:

```js
IR`${7}, ${1}${2}`;
//=> 7, 5, 3, 1
```

* Range `{-3, 7}`, with prefix `#`, suffix `:-)`, separator `, ` and step `2`:

```js
IR`#${-3}, ${7}:-)${2}`;
//=> #-3:-), #-1:-), #1:-), #3:-), #5:-), #7:-)
```

Template format supported by the integer range generator:

1. Optional prefix string
2. Starting value integer (required)
3. Optional separator string
4. Ending value integer (required)
5. Optional suffix string
6. Optional step integer
