const request = require('supertest');
describe('GET /', () => {
  it('should return 200', async () => {
    const response = await request('http://localhost:3000').get('/');
    expect(response.status).toBe(200);
  });
});