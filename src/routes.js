import { Router } from 'express'

const routes = new Router()
 
routes.get('/', (request, response) => {
    return response.status(200).json({ message: 'Bia Hello World! '})
})

export default routes