const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

// app.get('/:slug', (req, res) => {
//   res.send(`Hello to ${req.params.slug}`)
// })

app.get('/index', (req, res) => {
  res.sendFile(`calculator/calc_template.html`, {root: __dirname})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})