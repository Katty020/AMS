import { DataTypes, Model } from 'sequelize';
import sequelize from '../lib/db';

class Mess extends Model {}

Mess.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Mess',
});

export default Mess;