// Server.js sets up the express framework
// And is where you use middleware and routes

// Express 
const express = require('express');
const app = express();

// Port 
const port = 3030;

// Routes
const movieRoutes = require('./controllers/movies')
const userRoutes = require('./controllers/users')

// Other
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(cors())
app.use(bodyParser.json())

// Routes
app.get('/', (req, res) => res.send('Hello World!'));
app.use('/movies', movieRoutes); // From Controllers
app.use('/users', userRoutes) // From Controllers

app.listen(port, () => console.log(`Example app listening on port ${port}!`));