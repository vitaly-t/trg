function int(str, ...keys) {
    const prefix = str[0];
    const separator = str[1];
    const suffix = str[2];
    let start = parseInt(keys[0]);
    const end = parseInt(keys[1]);
    const inc = start < end ? 1 : -1;
    let s = '';
    do {
        if (s) {
            s += separator;
        }
        s += prefix + start + suffix;
        start += inc;
    } while (start != end + inc);
    return s;
}

module.exports = {int};
