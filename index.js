// implement your API here
const express = require('express');  
// REQUIRE is the same thing as an import statement

const db = require('./data/db');

const server = express();

server.use(express.json())

server.get('/api/users', (req, res) => {
    db
    .find()
    .then(individual => { res.status(200).json(individual) })
    .catch(err => {
        res
        .status(500)
        .json("The users information could not be retrieved.")
    })
})






server.listen(4000, () => {
    console.log('\n *** Server Running on http://localhost:4000 ***\n')
})