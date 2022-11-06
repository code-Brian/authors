const {response} = require('express')
const Author = require('../models/author.model')

const AuthorController = {
    // CREATE
    create: (request, response) => {
        Author.create(request.body)
        .then(author => {response.json(author)})
        .catch((err) => {response.json({msg: "Something went wrong...", error: err})})
    }
    // READ
    // UPDATE
    // DELETE
}

module.exports = AuthorController