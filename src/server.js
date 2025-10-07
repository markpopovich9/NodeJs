const express = require("express")

const post = require("./Post/Post.router")

const HOST = "127.0.0.1"
const PORT = 8000
const app = express()

app.use(express.json())

app.use(post)


app.listen(PORT, HOST, () => {
    console.log(`http://${HOST}:${PORT}`)
})