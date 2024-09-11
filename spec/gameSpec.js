describe("Memory Card Game", function() {
    let container;
    let gameCards;
  
    beforeEach(function() {
      // Setup DOM environment
      document.body.innerHTML = `
        <div class="grid-container"></div>
        <div class="score"></div>
        <div class="positive-score"></div>
        <div class="negative-score"></div>
      `;
      container = document.querySelector(".grid-container");
      gameCards = [
        { name: "card1", image: "path/to/image1.png" },
        { name: "card2", image: "path/to/image2.png" }
      ];
  
      // Mock fetch
      spyOn(window, 'fetch').and.returnValue(Promise.resolve({
        json: () => Promise.resolve(gameCards)
      }));
  
      // Run initial game setup
      return fetch("./cards.json").then(() => {
        randomizeCards();
        createCards();
      });
    });
  
    it("should initialize the game board", function() {
      expect(container.children.length).toBe(gameCards.length * 2);
    });
  
    it("should randomize cards", function() {
      const originalOrder = [...gameCards];
      randomizeCards();
      expect(gameCards).not.toEqual(originalOrder);
    });
  
    it("should handle card clicks correctly", function() {
      const cards = document.querySelectorAll(".card");
      cards[0].click();
      cards[1].click();
      
      // Check if the game logic for matching cards works
      expect(matchedPairs).toBe(0); // Assuming initial state
      
      // Implement more tests to check if the cards are matched or not
    });
  
    it("should update scores correctly on card match", function() {
      positiveScore = 0;
      negativeScore = 0;
      matchedPairs = 0;
  
      firstSelection = { dataset: { card: "card1" }, classList: { add: () => {} } };
      secondSelection = { dataset: { card: "card1" }, classList: { add: () => {} } };
  
      checkForCardMatch();
  
      expect(positiveScore).toBe(10);
      expect(matchedPairs).toBe(1);
      expect(currentScore).toBe(10);
    });
  
    it("should reset flipped cards after mismatch", function(done) {
      firstSelection = { classList: { add: () => {} } };
      secondSelection = { classList: { add: () => {} } };
      
      resetFlippedCards();
  
      setTimeout(() => {
        // Check if the cards have been reset
        expect(firstSelection.classList.contains("flipped")).toBe(false);
        expect(secondSelection.classList.contains("flipped")).toBe(false);
        done();
      }, 1000);
    });
  
    it("should restart the game correctly", function() {
      positiveScore = 10;
      negativeScore = -2;
      matchedPairs = 1;
  
      restart();
  
      expect(positiveScore).toBe(0);
      expect(negativeScore).toBe(0);
      expect(matchedPairs).toBe(0);
      expect(container.children.length).toBe(gameCards.length * 2);
    });
  
    afterEach(function() {
      // Clean up after tests
      document.body.innerHTML = "";
    });
  });
  