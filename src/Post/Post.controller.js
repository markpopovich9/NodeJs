const postService = require("./Post.service")

const postController = {

    getPostById: (req, res) => {
        const postId = req.params.id

        const response = postService.getPostById(postId)
        if (response.status === "error"){
            res.status(404).json("пост не знайдено")
        }

        res.status(200).json(response)
    },    
    getSlicedPosts: (req, res) => {
        const skip = req.query.skip
        const take = req.query.take
        const filter = req.query.filter
        
        
        const response =  postService.getSlicedPosts(skip, take, filter)

        if (response.status === "error"){
            res.status(400).json("повиновні бути числа")
        }

        // Повертаємо успіх зі зрізаним масивом постів
        res.status(200).json(response)
    },
    addToJson: (req, res) => {
        const requestBody = req.body

        const response = postService.addPostToJson(requestBody)

        if (response.status === "error"){
            res.status(200).json("error")
        }

        res.status(200).json(response)
    }
}

module.exports = postController