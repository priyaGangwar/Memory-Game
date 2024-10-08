const request = require('supertest');
const app = require('./server'); // Make sure to export your app from server.js

describe('API Endpoints', () => {
  it('should save a new score', async () => {
    const res = await request(app)
      .post('/api/scores')
      .send({ playerName: 'Test Player', score: 100 });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('playerName', 'Test Player');
  });

  it('should get leaderboard', async () => {
    const res = await request(app).get('/api/leaderboard');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBeTruthy();
  });
});
