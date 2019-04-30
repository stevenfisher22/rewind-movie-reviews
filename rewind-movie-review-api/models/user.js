// Models define structure to map to the database

module.exports = (sequelize, Sequelize) => {
    return sequelize.define('user', {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        email: {
            type: Sequelize.TEXT,
            allowNull: false
            // Need to add other things I want for users 
    }})
}