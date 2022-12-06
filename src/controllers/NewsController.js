class NewsController {
    index(req, res) {
        res.send('Hello World! New')
    }
    id(req, res) {
        console.log(req?.query)
        res.send('Hello World! New id')
    }
    page(req, res) {
        console.log(req?.query?.abc)
        res.send('Hello World! New ' + req?.query?.abc)
    }
}

module.exports = new NewsController()
