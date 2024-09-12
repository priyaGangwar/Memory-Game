import { randomizeCards, checkForCardMatch } from './index.js';

describe("Utility tests", () => {
    test("Reloads only when needed", function () {
        return __awaiter(this, void 0, void 0, function* () {
            //  let cm = new cmake.CMakeHelpers();
        });
    });

    test('randomizeCards should shuffle the cards', () => {
        const cards = [{ name: 'A' }, { name: 'B' }];
        randomizeCards(cards);
        expect(cards).not.toEqual([{ name: 'A' }, { name: 'B' }]);
    });

    test('checkForCardMatch should update scores correctly', () => {
        // Mock DOM elements and dataset
        document.body.innerHTML = `
            <div class="score">0</div>
            <div class="positive-score">0</div>
            <div class="negative-score">0</div>
        `;
        const firstSelection = { dataset: { card: 'A' } };
        const secondSelection = { dataset: { card: 'A' } };
        checkForCardMatch(firstSelection, secondSelection);
        expect(document.querySelector('.positive-score').textContent).toBe('10');
    });
});
