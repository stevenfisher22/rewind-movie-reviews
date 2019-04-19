// Controllers define routes and business logic 
// Controllers call to repositories when you need to access the database

const routes = require('express').Router();
const {createUser, getUser, getUsers} = require('../repositories/user');


routes.get('/', (req, res) => {
    // Write .get function to get movies from db and return all movies
    getUsers().then(users => {
        res.status(200).json(users);
    })
})

routes.get('/:id', (req, res) => {
    // .get function to get movies from db and return all movies
    const promise = getUser(req.params.id)
    promise.then(user => {
        res.status(200).json(user);
    })
})

routes.post('/', (req, res) => {
    // Get User with that username
    // If username exists, return an error (error.status 500)
    // Else, then create user
    // Or FindOrCreate in documentation

    createUser(req.body)
    res.status(200).json(req.body);
})

routes.put('/:id', (req, res) => {
    res.status(200).json(req.body)
})



routes.get('/:id/reviews', (req, res) => {
    res.status(200).json({ message: `Here are the reviews for ${req.params.id}`})
})

routes.post('/:id/reviews', (req, res) => {
    res.status(200).json(req.body)
})

routes.put('/:id/reviews/:reviewId', (req, res) => {
    res.status(200).json(req.body)
})


module.exports = routes;