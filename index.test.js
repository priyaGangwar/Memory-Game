const { randomizeCards } = require('./index.js');

describe("Utility tests", () => {
    test('randomizeCards should shuffle the cards', () => {
        const cards = [{ name: 'A' }, { name: 'B' }];
        randomizeCards(cards);
        expect(cards).not.toEqual([{ name: 'A' }, { name: 'B' }]);
    });
});
