import { DataTypes, Model } from 'sequelize';
import sequelize from '../lib/db';

class Hostel extends Model {}

Hostel.init({
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
  modelName: 'Hostel',
});

export default Hostel;