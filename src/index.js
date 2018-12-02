'use strict';

/**
 * @description
 * Parameter-based integer-range generator.
 *
 * @param {} a
 * Input parameters
 *
 * @param {number} a.start
 * Range start (inclusive)
 *
 * @param {number} a.end
 * End of range (inclusive)
 *
 * @param {number} [a.step=1]
 * Increment/Decrement step.
 *
 * @param {string} [a.prefix]
 * Optional prefix string at the start of each generated value.
 *
 * @param {string} [a.separator]
 * Optional separator string between each generated value.
 *
 * @param {string} [a.suffix]
 * Optional suffix string at the end of each generated value.
 *
 * @returns {string}
 */
function forInt(a) {
    const step = a.step > 0 ? a.step : 1;
    const inc = a.start < a.end ? step : -step;
    let s = '';
    do {
        if (s) {
            s += a.separator;
        }
        s += a.prefix + a.start + a.suffix;
        a.start += inc;
    } while ((inc > 0 && a.start <= a.end) || (inc < 0 && a.start >= a.end));
    return s;
}

/**
 * @description
 * ES6 Template-based integer-range generator.
 *
 * @param str
 * ES6 Template String
 *
 * @param keys
 * Formatting parameters.
 *
 * @returns {string}
 * Formatted string, according to the template.
 */
function int(str, ...keys) {
    return forInt({
        start: parseInt(keys[0]),
        end: parseInt(keys[1]),
        step: keys.length > 2 ? parseInt(keys[2]) : 1,
        prefix: str[0],
        separator: str[1],
        suffix: str[2]
    });
}

module.exports = {int, forInt};
