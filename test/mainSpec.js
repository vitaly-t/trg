const lib = require('../src');

describe('entry', () => {
    it('must contain valid object', () => {
        expect(typeof lib.int).toBe('function');
        expect(typeof lib.forInt).toBe('function');
    });
});

describe('increment', () => {
    it('must fill entire range', () => {
        expect(lib.int`${1}${5}`).toBe('12345');
    });
});

describe('incremental step', () => {
    it('must include the end value when inside the range', () => {
        expect(lib.int`${1}${5}${2}`).toBe('135');
        expect(lib.int`${1}${7}${3}`).toBe('147');
    });
    it('must skip the end value when outside the range', () => {
        expect(lib.int`${1}${6}${2}`).toBe('135');
        expect(lib.int`${1}${6}${3}`).toBe('14');
    });
    it('must correct invalid values', () => {
        expect(lib.int`${1}${5}${0}`).toBe('12345');
        expect(lib.int`${1}${5}${-3}`).toBe('12345');
    });
});

describe('decrement', () => {
    it('must fill entire range', () => {
        expect(lib.int`${5}${1}`).toBe('54321');
    });
    it('must step correctly', () => {
        expect(lib.int`${5}${1}${2}`).toBe('531');
        expect(lib.int`${6}${1}${2}`).toBe('642');
    });
});

describe('decremental step', () => {
    it('must include the start value when inside the range', () => {
        expect(lib.int`${5}${1}${2}`).toBe('531');
        expect(lib.int`${7}${1}${3}`).toBe('741');
    });
    it('must skip the start value when outside the range', () => {
        expect(lib.int`${6}${1}${2}`).toBe('642');
        expect(lib.int`${6}${1}${3}`).toBe('63');
    });
    it('must correct invalid values', () => {
        expect(lib.int`${5}${1}${0}`).toBe('54321');
        expect(lib.int`${5}${1}${-3}`).toBe('54321');
    });
});

describe('prefix', () => {
    it('must be added in front', () => {
        expect(lib.int`#${1}${3}`).toBe('#1#2#3');
    });
    it('must allow special symbols', () => {
        expect(lib.int` ${1}${3}`).toBe(' 1 2 3');
        expect(lib.int`\t${1}${3}`).toBe('\t1\t2\t3');
    });
});

describe('separator', () => {
    it('must be added in between', () => {
        expect(lib.int`${1},${3}`).toBe('1,2,3');
    });
    it('must allow special symbols', () => {
        expect(lib.int`${1} ${3}`).toBe('1 2 3');
        expect(lib.int`${1}\t${3}`).toBe('1\t2\t3');
    });
});

describe('suffix', () => {
    it('must be added at the end', () => {
        expect(lib.int`${1}${3}!`).toBe('1!2!3!');
    });
    it('must allow special symbols', () => {
        expect(lib.int`${1}${3} `).toBe('1 2 3 ');
        expect(lib.int`${1}${3}\t`).toBe('1\t2\t3\t');
    });
});
