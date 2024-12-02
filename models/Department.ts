import { DataTypes, Model } from 'sequelize';
import sequelize from '../lib/db';

class Department extends Model {}

Department.init({
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
  modelName: 'Department',
});

export default Department;