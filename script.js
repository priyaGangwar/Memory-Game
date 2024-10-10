let playerName = '';

function startGame() {
  playerName = document.getElementById('player-name').value;
  if (playerName) {
    document.getElementById('player-form').style.display = 'none';
    // Your existing game start logic here
  } else {
    alert('Please enter your name');
  }
}

function endGame(score) {
  // Your existing end game logic here

  // Save score to server
  fetch('http://localhost:5000/api/scores', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ playerName, score }),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Score saved:', data);
    fetchLeaderboard();
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}

function fetchLeaderboard() {
  fetch('http://localhost:5000/api/leaderboard')
    .then(response => response.json())
    .then(data => {
      displayLeaderboard(data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

function displayLeaderboard(scores) {
  // Create and display a leaderboard on your page
}

function sendScore(score) {
  fetch('/api/score', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ score })
  }).then(response => response.json())
    .then(data => console.log(data.message));
}
