const express = require('express')
const app = express()
const port = 4000

app.get('/app', (req, res) => {
  console.log('app get request');
  res.send('Hello World - second service.')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})