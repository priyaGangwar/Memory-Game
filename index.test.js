const { randomizeCards, createCards, checkForCardMatch } = require('../index.js');

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
