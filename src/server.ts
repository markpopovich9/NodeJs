import express from "express"
import { postRouter } from "./Post/Post.router"
import { postController } from "./Post/Post.controller"
import { tagRouter } from "./Tags/Tags.router"

const HOST = "127.0.0.1"
const PORT = 8000
const app = express()

app.use(express.json())
app.use(postRouter)
app.use(tagRouter)
app.delete("/posts/:id", postController.deletePost);
app.listen(PORT, HOST, () => {
  console.log(`http://${HOST}:${PORT}`)
})
