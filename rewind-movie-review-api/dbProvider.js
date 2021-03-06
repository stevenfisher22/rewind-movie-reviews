// DB Provider sets up the connection to the database
// And Configures models to be exported for use by the Repository

const Sequelize = require('sequelize');
const UserModel = require('./models/user');

const sequelize = new Sequelize('rewindMovieReviews', 'postgres', null, {
    host: 'localhost',
    dialect: 'postgres'
});

const User = UserModel(sequelize, Sequelize)

sequelize.sync()

module.exports = {
    User
}