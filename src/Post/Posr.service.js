const postService = {
    getSlicedPosts: (skip, take, filter) => {

            
            
            let Skip = Number(skip)
            let Take = Number(take)
            let Filter = Boolean(filter)
        

            if (isNaN(Skip)){
                return {status:"error"}
            }
            if (isNaN(Take)){
                
                return {status:"error"}
            }
            if (!isBoolean(Filter)) {
                return {status:"error"}
            }
            
            let filteredPosts = postsFromJson.slice(Skip, Take + Skip)
            if (Filter){
                filteredPosts = filteredPosts.filter((element) => {
                    return element.title.includes("a")
                })
            }
            
            return {status: "success", posts: filteredPosts}
    },

    getPostById: (postId) => {
        const post = repositoriy.postsFromJson[postId]
        
        if (!post){
            return {status: "error"}
        } 

        return {status: "success", post: repositoriy.postsFromJson[postId]}
    },
    addPostToJson: (requestBody) => {
        console.log(requestBody)
        if(!requestBody){
            return {status: "error"}
        }
        if (!requestBody.title || !requestBody.description || !requestBody.image){
            return {status: "error"}
        }
        const post = {
            title: String(requestBody.title),
            description: String(requestBody.description),
            image: String(requestBody.image)
        }
        const lastId = repositoriy.postsFromJson.at(-1).id + 1
        post.id = lastId

        // Повертаємо код успіху
        return {status: "success", post: post}
    }
}

module.exports = postService