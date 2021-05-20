const { Sequelize } = require('sequelize');
const UserModel = require('./models/User')

const sequelize = new Sequelize('brainhub_task', 'root', 'Charli14',{
    host: 'localhost',
    dialect: 'mysql'
});

const User = UserModel(sequelize, Sequelize);
sequelize.sync();

module.exports = {
    User
}