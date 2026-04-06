const request = require('supertest');
const app = require('../src/index');
describe('GET /', () => {
  it('should return 200', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
  });
})