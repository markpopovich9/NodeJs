
const moment = require("moment");
const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const HOST = "127.0.0.1";
const PORT = 8000;
const Products = path.join(__dirname, "products.json")
const UserPath = path.join(__dirname, "users.json")

let ProductsJson = JSON.parse(fs.readFileSync(Products, "utf8"))

const userJson = JSON.parse(fs.readFileSync(UserPath, "utf8"))
function getdate() {
  const date = moment();
  return date.format("YYYY/DD/MM HH:mm:ss");
}

app.get("/timestamp", (req, res) => {
  res.json({ timestamp: getdate() });
});
/// функція для додатку нового обєкту у json файл
async function addJson(Massive, newObj) {
    const massive = Massive
    massive.push(newObj)
    return await fsPromises.writeFile(Products, JSON.stringify(massive))
}
// обробляемо пост запит
app.post("/posts", (req, res) => {
    const body = req.body
    // перевірка чи є щось в body
    if(!body){
        res.status(422).json("body is required")
        return
    }
    // перевірка чи є всі дані в body
    if (body.title || !body.description || body.image){
        res.status(422).json("title, description and image are required")
        return
    }
    // перевірка чи вірний тип даних
    const posts = {
        title: String(body.title),
        description: String(body.description),
        image: String(body.image)
    }
    // додаємо id
    const id = ProductsJson.at(-1).id + 1
    posts.id = id
    // успішне додавання
    res.status(200).json(posts)
})
app.get("/posts", (req, res) => {
//  Создаем query параметры
    const skip = req.query.skip
    const take = req.query.take
    const filter = req.query.filter
    // Переводим ці параметри у потрібний тип
    let Skip = Number(skip)
    let Take = Number(take)
    let Filter = Boolean(filter)
    // Ці условія якщо нічого не задано
    if (!skip){Skip = 0}
    if (!take){Take = Products.length}
    if (!filter){Filter = false}

    // Перевірка чи вірний тип даних
    if (isNaN(skip)){
        res.status(400).json("Вкажіть число")
        return
    }
    if (isNaN(take)){
        res.status(400).json("Вкажіть число")
        return
    }
    if (!isBoolean(filter)) {
        res.status(400).json("Вкажіть булеве значення")
        return
    }
    // Створено зріз масиву постс 
    let filtered = Products.slice(Skip, Take + Skip)
    if (filter){
        filteredPosts = filtered.filter((element) => {
            return element.title.includes("a")
        })
    }
    // Повертаеємо позитивний результат
    res.json(Products);
    res.status(200).json(filteredPosts)
    
})
app.get("/posts/:id", (req, res) => {
    const postId = Number(req.params.id);
    const post = ProductsJson.find(p => p.id === postId);
    if (!post){
        res.status(404).json("продукт не знайдено")
        return;
    } 
    res.status(200).json(post)
})
app.get("/users", (req, res) => {
    let allUsers =res.json({users: userJson})
})
// отримуємо користувача по id
app.get("/users/:id", (req, res) => {
    const fields = req.query.fields
    let users = Number(req.params.id)
   
    const user = userJson.find(u => u.id === users)
    if (!user){
        res.status(404).json("користувач не знайдено")
        return;
    }
    res.json({user})
    }

)
app.listen(PORT, HOST, () => {
  console.log(`http://${HOST}:${PORT}`);
});