const { Router } = require('express')

const routes = new Router()

routes.get('/', (require, response) => {
    return response.status(200).json({ message: 'Hello World!, my life.'})
})

module.exports = routes