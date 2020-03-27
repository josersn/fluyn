import { Model, Sequelize } from "sequelize";

class User extends Model {
    static init(sequelize){
        super.init({
            user: Sequelize.STRING,
            email: Sequelize.STRING,
            password_hash: Sequelize.STRING,
            birthday: Sequelize.STRING,
            author: Sequelize.BOOLEAN
        }, {
            sequelize
        });
    }
}

export default User;