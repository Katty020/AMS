import { DataTypes, Model } from 'sequelize';
import sequelize from '../lib/db';

class StudentDetail extends Model {}

StudentDetail.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  department_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  hostel_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  mess_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'StudentDetail',
});

export default StudentDetail;