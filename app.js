// app.js
const express = require('express');
const app = express();
const PORT = 3001

app.get('/hello', (req, res) => {
    res.send('Hello, World!');
});

const server = app.listen(PORT, () => {
    console.log('Server is running on port 3000');
});

module.exports = { app, server };
