const AuthorController = require('../controllers/author.controller')

const routes = app => {
    // READ
    // GET ALL
    app.get("/api/authors", AuthorController.getAll)
    // GET ONE
    app.get("/api/authors/:id", AuthorController.getOne)
    // UPDATE
    app.put("/api/authors/:id", AuthorController.update)
    // CREATE
    app.post("/api/authors", AuthorController.create)
    // DELETE
    app.delete("/api/authors/:id", AuthorController.delete)
}

module.exports = routes