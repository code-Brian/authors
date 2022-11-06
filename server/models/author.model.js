const mongoose = require('mongoose')

const AuthorSchema = new mongoose.Schema({
    // Name
    // Book
    // Num Pages
})

const Author = mongoose.model('Author', AuthorSchema)

module.export = Author