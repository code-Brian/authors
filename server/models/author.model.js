const mongoose = require('mongoose')

const AuthorSchema = new mongoose.Schema({
    // Name
    name: {
        type: String,
        required: [true,"Author name is required!"],
        minLength:[3, "Author name must be at least 3 characters."],
        trim: true
    }
},{timestamps:true})

const Author = mongoose.model('Author', AuthorSchema)

module.exports = Author