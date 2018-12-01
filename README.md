Template Range Generator
------------------------

Generic-template generator for a range of numbers or letters, using ES6 template strings.

## Install

```
$npm install trg
```

## Usage

```js
const int = require('trg').int; // integer range formatter
```

Use `int` as ES6 Template string processor:

```js
int`$pref${-3}, ${2}suf`;
//=> $pref-3suf, $pref-2suf, $pref-1suf, $pref0suf, $pref1suf, $pref2suf

int`$${-5}, ${3}`;
//=> $-5, $-4, $-3, $-2, $-1, $0, $1, $2, $3

int`$${1}, ${12}`;
//=> $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12

int`${12}, ${1}`;
//=> 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
```

Formatter `int` expects the following inside the string template:

1. Optional prefix
2. Starting value
3. Optional separator
4. End value
5. Optional suffix
