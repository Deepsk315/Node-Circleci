// app.js
const express = require('express');
const app = express();
const PORT = 3001

app.use(express.json());


app.get('/hello', (req, res) => {
    res.status(200).send('Hello, World!');
});

app.post('/test-api', (req, res) => {
    let { a, b } = req.body;
    console.log('received req.body : ',req.body)
    const sum = a + b; 
    return res.status(200).send(sum.toString());
});

const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = { app, server };


