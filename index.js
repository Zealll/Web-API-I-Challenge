// implement your API here
const express = require('express');  
// REQUIRE is the same thing as an import statement

const db = require('./data/db');

const server = express();

server.use(express.json())

server.listen(4000, () => {
    console.log('\n *** Server Running on http://localhost:4000 ***\n')
})