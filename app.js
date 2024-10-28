// app.js
const express = require('express');
const app = express();
const PORT = 3001

app.get('/hello', (req, res) => {
    res.status(200).send('Hello, World!');
});

app.get('/test-api',(req,res)=>{
    let {a,b} = req.query;
    const sum = parseInt(a)+parseInt(b)
    return res.status(200).send(sum.toString)
})

const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = { app, server };


