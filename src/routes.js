import { Router } from 'express';

const routes = new Router()

routes.get('/', (require, response) => {
    return response.status(200).json({ message: 'Hello World!, life.'})
})

export default routes;