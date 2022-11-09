const Author = require('../models/author.model')

const AuthorController = {
    // CREATE
    create: (request, response) => {
        Author.create(request.body)
        .then((author) => {
            console.log(response.data)
            response.json(author)
        })
        .catch(err => response.status(400).json(err))
    },
    // READ
    getAll: (request,response) => {
        Author.find()
        .then((allAuthors) => {response.json(allAuthors)})
        .catch((err) => {response.json({msg: "Something went wrong...", error: err})})
    },
    getOne: (request, response) => {
        Author.findOne({_id:request.params.id})
        .then(author => {response.json(author)})
        .catch((err) => {response.json({msg: "Something went wrong...", error: err})})
    },
    // UPDATE
    update: (request,response) => {
        Author.findOneAndUpdate({_id:request.params.id}, request.body, {new:true, runValidators:true})
        .then(updatedAuthor => {response.json(updatedAuthor)})
        .catch((err) => {response.status(400).json(err)})
    },
    // DELETE
    delete: (request,response) => {
        Author.deleteOne({_id:request.params.id})
        .then(deletedAuthor => {response.json(deletedAuthor)})
        .catch((err) => {response.json({msg: "Something went wrong...", error: err})})
    }
}

module.exports = AuthorController