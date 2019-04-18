const express = require('express')
const app = express()
const port = 3030;
const movieRoutes = require('./controllers/movies')

app.get('/', (req, res) => res.send('Hello World!'));

app.use('/movies', movieRoutes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));