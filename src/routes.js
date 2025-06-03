import { Router } from 'express';
import { v4 } from 'uuid';

import User from './app/models/User';

const routes = new Router()

routes.get('/', async (require, response) => {
    const user = await User.create({
        id: v4(),
        name: 'Carlos Bia2',
        email: 'carlos2@email.com',
        password_hash: 'asdfdfçlkhljmç'
    });

    return response.status(201).json(user);
})

export default routes;