const express = require('express')
const app = express()

const PORT = 3001

app.use(express.json())

app.get("/hello",(req,res) => {
    return res.status(200).send("Hello, World!")
})

app.listen(PORT,()=>{
    console.log(`server started on port : ${PORT}`)
})

module.exports = app