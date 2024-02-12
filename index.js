require('dotenv').config()
// console.log(process.env) // remove this after you've confirmed it is working

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.get('/twiter', (req, res) => {
  res.send('priya pdre');
})

app.get('/login', (req, res) => {
  res.send('please login ur account');
})

app.get('/youtube', (req, res) => {
  res.send('<h2>you are at youtube</h2>');
})

app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`);
})