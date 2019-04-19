// Repository defines interactions with the database
const {User} = require('../dbProvider');

function CreateUser(newUser) {
    User.create(newUser).then(u => console.log(u.id))
}

function GetUser(userId) {
    return User.findByPk(userId)
}

function GetAllUsers() {
    return User.findAll()
}

module.exports.createUser = CreateUser;
module.exports.getUser = GetUser;
module.exports.getUsers = GetAllUsers;



