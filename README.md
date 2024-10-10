# Memory Card Game

## Overview:
The Memory Card Game is a simple web-based game where players flip over cards to find matching pairs. The game is built using HTML, CSS, and JavaScript, 
with the card data sourced from a JSON file. The objective of the game is to match all pairs of cards with the highest score.

## Features:
  Responsive Design: The game grid adapts to desktop and laptop screen sizes, making it playable on desktop.
  Dynamic Card Loading: Card images and names are loaded from a JSON file, allowing for easy updates and customization.
  Score Tracking: The game keeps track of the player's score, awarding points for matching pairs and reducing points for not matching pairs.
  Restart Functionality: Players can restart the game at any time, with the cards reshuffled and the score reset.
  Winning Animation: Sparkles and animations are triggered when the player successfully matches all pairs.
  
## Game Rules:
1. The game consists of a grid of cards placed face down.
2. Players can flip over two cards at a time.
3. If the cards match, they remain face up.
4. If the cards do not match, they are flipped back over.
5. The game continues until all pairs are matched.
6. The player's score increases with each card flipped and when a match is found and decreases otherwise.

<img width="1277" alt="Screenshot 2024-09-12 at 10 32 55 PM" src="https://github.com/user-attachments/assets/66a70e46-00f3-49c3-9c98-a1367e0fc7fb">

## ESLint 
ESLint is a static code analysis tool for identifying and fixing problems in JavaScript code. 
It helps developers follow consistent coding styles, catch errors early, and improve code quality.

To use ESLint in your project, follow these steps:

Open your terminal and navigate to your project folder.
Run the following command to install ESLint:
npm init -y  
npm install eslint --save-dev
npx eslint --init
npx eslint <filename.js>
To lint an entire project:
npx eslint .
npx eslint . --fix

## Stylelint
To run Stylelint, you need to install it and configure it first. Here's how you can get started:

npm install --save-dev stylelint stylelint-config-standard
2. Configure Stylelint
Create a .stylelintrc.json file in the root of your project with a configuration like this:
{
  "extends": "stylelint-config-standard",
  "rules": {
    "indentation": 2,
    "string-quotes": "single"
  }
}
npx stylelint "**/*.css"
npx stylelint "**/*.css" --fix

## Jest
To run Jest, you'll first need to set it up in your project. Here’s a step-by-step guide:
npm install --save-dev jest
Add a Test Script: In your package.json file, add a test script that uses Jest:
"scripts": {
  "test": "jest"
}

## Refactoring code:
Changed various things like code duplication, dead codes, formatting, indentation errors etc.
Changed few code snippets so that it is easy to understand the game logic and read code.
<img width="1440" alt="Screenshot 2024-09-12 at 4 28 48 PM" src="https://github.com/user-attachments/assets/b068ff75-69b6-4f24-b814-70270243c252">
<img width="1440" alt="Screenshot 2024-09-12 at 8 45 14 AM" src="https://github.com/user-attachments/assets/466aa158-deab-405e-8aca-d6590e3b87a9">
<img width="773" alt="Screenshot 2024-09-12 at 8 38 31 AM" src="https://github.com/user-attachments/assets/3d33856f-4e96-41eb-9087-1f5739dc8d52">

# Memory Game - Client-Server Edition

## Project Overview
This project is an extension of our original Memory Game, transforming it from a static web application into a multi-tiered client-server architecture. The game now includes features such as player authentication, score tracking, and a leaderboard system.

## GitHub Repository
[https://github.com/priyagangwar/Memory-Game](https://github.com/priyagangwar/Memory-Game)

## Deployed Version
[Link to deployed game - ]

## Architecture and Test Pyramid Diagram
<img width="199" alt="Screenshot 2024-10-10 at 10 37 21 PM" src="https://github.com/user-attachments/assets/50792405-ccf5-4e60-b489-25ad6f1df57b">

## Features
- Player name input before game start
- Score tracking and storage
- Top 10 leaderboard
- Client-server communication via RESTful API
- Database integration for persistent storage
<img width="1440" alt="Screenshot 2024-10-10 at 7 52 50 PM" src="https://github.com/user-attachments/assets/6c79cf90-5bca-4bf4-91a4-fde8a79f8586">


## Tech Stack
- Frontend: HTML, CSS, [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- Backend: [Node.js](https://nodejs.org/) with [Express.js](https://expressjs.com/)
- Database: [MongoDB](https://www.mongodb.com/)
- Testing: [Jest](https://jestjs.io/), [Supertest](https://www.npmjs.com/package/supertest)

## Setup and Installation
1. Clone the repository:git clone https://github.com/priyagangwar/Memory-Game.git 
   cd Memory-Game

2. Install dependencies:
   cd server
   npm install
   cd ../client
   npm install
   
3. Set up MongoDB:
- Install MongoDB if not already installed
- Start MongoDB service

4. Start the server:
   cd server
   npm start
   
5. Open the client:
- Open `index.html` in a web browser

## Running Tests
To run the test suite:
cd server
npm test

## API Endpoints
- POST /api/scores: Save a new score
- GET /api/leaderboard: Retrieve top 10 scores
