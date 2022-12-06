const newsRouter = require('./news')

function route(app) {
    app.get('/', (req, res) => {
        res.send('Hello World! aaaa')
    })

    app.get('/about', (req, res) => {
        res.send('Hello about  adadaaaaaaaa')
    })

    app.use('/new', newsRouter)
}

module.exports = route