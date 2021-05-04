import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class User extends Model{
    static init (sequelize) {
        super.init({
            name: Sequelize.STRING,
            email: Sequelize.STRING,
            password: Sequelize.VIRTUAL, // Vistual quer dizer que ele só vai existir só no codigo e não no banco
            password_hash: Sequelize.STRING,
            provider: Sequelize.BOOLEAN,
        }, {
            sequelize,
        });

        this.addHook('beforeSave', async (user) => {
            if (user.password) {
                user.password_hash = await bcrypt.hash(user.password, 8);
            };
        });

        return this; // sempre vai retornar a model reinicializada
    }

    static associate(models) {
        this.belongsTo(models.File, { foreignKey: 'avatar_id', as: 'avatar'})
    }

    checkPassword(password) {
        return bcrypt.compare(password, this.password_hash);
    }
    
}

export default User;