import Sequelize, { Model } from 'sequelize';

/* Interface para integrar nosso banco de dados, persistir dados */

class User extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                email: Sequelize.STRING,
                password_hash: Sequelize.STRING,
                admin: Sequelize.BOOLEAN,
            },
            {
                sequelize,
            },
        );
    }
}

export default User;