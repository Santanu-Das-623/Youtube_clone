const express = require('express')
const app = express()


// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world')
})

app.get('/twitter',(req,res)=>{
    res.send('santanudas')
})

app.listen(port,(req,res)=>{
    console.log(`working on port ${port}`)
})