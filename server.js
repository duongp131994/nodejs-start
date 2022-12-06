const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

const route = require('./src/routes')

//routes init
route(app)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})