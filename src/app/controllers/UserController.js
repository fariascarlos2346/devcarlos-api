/*
    * store => Cadastrar / Adicionar
    * index => Listar vários
    * show => Listar apenas um
    * update => Atualizar 
    * delete => Deletar
*/
import { v4 } from 'uuid';
import * as Yup from 'yup';

import User from '../models/User';

class UserController {
    async store(request, response) {
        const schema = Yup.object({
            name: Yup.string().required(),
            email: Yup.string().email().required(),
            password_hash: Yup.string().min(6).required(),
            admin: Yup.boolean(),
        });

        try {
            schema.validateSync(request.body, { abortEarly: false });
        } catch (err) {
            return response.status(400).json({ error: err.errors });
        }
        
        const { name, email, password_hash, admin } = request.body;

        const userExists = await User.findOne({
            where: {
                email,
            },
        });

        if (userExists) {
            return response.status(400).json({ error: 'User already exists' });
        }
/*  consultando usuario, so cadastra não existente */ 
        const user = await User.create({
            id: v4(),
            name,
            email,
            password_hash,
            admin,
        });
    
        return response.status(201).json({
            id: user.id,
            name,
            email,
            admin,
        });
    }
}

export default new UserController();