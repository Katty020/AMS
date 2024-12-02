import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('admission_management', 'root', 'Aryan@123', {
  host: 'localhost',
  dialect: 'mysql',
});

export default sequelize;