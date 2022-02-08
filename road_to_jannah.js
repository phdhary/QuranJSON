const appRoutes = require("./router/router")
const express = require('express')
const app = express()
const { PORT } = require("./constant")
var fs = require('fs');

app.use(appRoutes())


app.listen(PORT, () => {
  console.log(`بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم\nListening on port ${PORT}`)
})