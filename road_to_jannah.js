const appRoutes = require("./router/router")
const express = require('express')
const app = express()
const { PORT } = require("./constant")

app.use(appRoutes())

app.use((req, res, next) => {
  res.status(404)
  next(Error(`The page not found in path ${req.url} and method ${req.method}`))
})

app.listen(PORT, () => {
  console.log(`بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم\nListening on port ${PORT}`)
})