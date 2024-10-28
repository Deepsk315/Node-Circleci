// app.test.js
const request = require('supertest');
const { app, server } = require('./app');

describe('GET /hello', () => {
    afterAll(done => {
        server.close(done);  // Close the server after tests
    });

    it('responds with Hello, World!', async () => {
        const response = await request(app).get('/hello');
        expect(response.text).toBe('Hello, World!');
        expect(response.status).toBe(200);
    });
});
