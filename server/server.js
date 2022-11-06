const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 8000

app.use(cors())
app.use(express.json())

require('./config/mongoose.config')
const routes = require('./routes/author.routes')
routes(app)

app.listen(PORT, ()=>{console.log(`The server is live and ticking on port: ${PORT}!`)})