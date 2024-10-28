// app.test.js
const request = require('supertest');
const { app, server } = require('./app');

describe('GET /hello', () => {

    it('responds with Hello, World!', async () => {
        const response = await request(app).get('/hello');
        expect(response.text).toBe('Hello, World!');
        expect(response.status).toBe(200);
    });
});

describe('GET /test-api',()=>{
    it('Obtains the addition of two numbers',async()=>{
        const response = await request(app).get('/test-api?a=10&b=20');
        console.log('received resposne : ',response)
        expect(response.text).toBe('30');
        expect(response.status).toBe(200)
    })
})

afterAll(done => {
    server.close(done);
});