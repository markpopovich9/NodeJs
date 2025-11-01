import express from "express"
import post from "./Post/Post.router"
import { postController } from "./Post/Post.controller"

const HOST = "127.0.0.1"
const PORT = 8000
const app = express()

app.use(express.json())
app.use(post)
app.delete("/posts/:id", postController.deletePost);
app.listen(PORT, HOST, () => {
  console.log(`http://${HOST}:${PORT}`)
})
