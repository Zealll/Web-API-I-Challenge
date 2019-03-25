// implement your API here
const express = require('express');  
// REQUIRE is the same thing as an import statement

const db = require('./data/db');

const server = express();

server.use(express.json())

server.get('/api/users', (req, res) => {
    db
    .find()
    .then(everyone => { res.status(200).json(everyone) })
    .catch(err => {
        res
        .status(500)
        .json("The users information could not be retrieved.")
    })
})

server.get('/api/users/:id', (req, res) => {
    const id = req.params.id
    db
    .findById(id)
    .then(individual => {
        if (!individual) {
            res
            .status(404)
            .json({message: "The user with the specified ID does not exist."})
        } {
            res.json(individual)
        }
    })
    .catch(err => {
        res
        .status(500)
        .json({message: "The user information could not be retrieved."})
    })
})






server.listen(4000, () => {
    console.log('\n *** Server Running on http://localhost:4000 ***\n')
})