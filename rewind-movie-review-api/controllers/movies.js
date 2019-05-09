// Controllers define routes and business logic 
// Controllers call to repositories when you need to access the database


const routes = require('express').Router();

routes.get('/', (req, res) => {
    // Write .get function to get movies from db and return all movies
    res.status(200).json({ message: 'Movies Connected'});
})

routes.get('/:id', (req, res) => {
    // Write .get function to get movies from db and return all movies
    res.status(200).json({ message: `Here is your ${req.params.id}`});
})

routes.post('/', (req, res) => {
    console.log(req.body)
    res.status(200).json(req.body);
})

routes.put('/:id', (req, res) => {
    res.status(200).json(req.body)
})

module.exports = routes;