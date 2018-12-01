'use strict';

/**
 * @description
 * Parameter-based integer-range generator.
 *
 * @param {} a
 * Input parameters
 *
 * @param {number} start
 * Range start (inclusive)
 *
 * @param {number} end
 * End of range (inclusive)
 *
 * @param {string} [prefix]
 * Optional prefix string at the start of each generated value.
 *
 * @param {string} [separator]
 * Optional separator string between each generated value.
 *
 * @param {string} [suffix]
 * Optional suffix string at the end of each generated value.
 *
 * @returns {string}
 */
function forInt(a) {
    const inc = a.start < a.end ? 1 : -1;
    let s = '';
    do {
        if (s) {
            s += a.separator;
        }
        s += a.prefix + a.start + a.suffix;
        a.start += inc;
    } while (a.start != a.end + inc);
    return s;
}

/**
 * @description
 * Parameter-based letter-range generator.
 *
 * @param {} a
 * @returns {string}
 */
function forLetters(a) {
    throw new Error('Function "forLetters" is not yet implemented.');
}

/**
 * @description
 * ES6 Template - based integer-range generator.
 *
 * @param str
 * @param keys
 * @returns {string}
 */
function int(str, ...keys) {
    return forInt({
        start: parseInt(keys[0]),
        end: parseInt(keys[1]),
        prefix: str[0],
        separator: str[1],
        suffix: str[2]
    });
}

/**
 * @description
 * ES6 Template - based letter-range generator.
 *
 * @param str
 * @param keys
 * @returns {string}
 */
function letters(str, ...keys) {
    return forLetters({
        start: keys[0],
        end: keys[1],
        prefix: str[0],
        separator: str[1],
        suffix: str[2]
    });
}

module.exports = {forInt, forLetters, int, letters};
