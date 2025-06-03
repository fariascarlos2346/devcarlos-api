import { Router } from 'express';

import User from './app/models/User';

const routes = new Router()

routes.get('/', async (require, response) => {
    const user = await User.create({
        name: 'Carlos Bia',
        email: 'carlos@email.com',
        password_hash: 'asdfdfçlkhljmç'
    });

    return response.status(201).json(user);
})

export default routes;