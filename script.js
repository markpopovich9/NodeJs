
const moment = require("moment");
const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const HOST = "127.0.0.1";
const PORT = 8000;
const Products = path.join(__dirname, "products.json")
const UserPath = path.join(__dirname, "users.json")

const ProductsJson = JSON.parse(fs.readFileSync(Products, "utf8"))

const userJson = JSON.parse(fs.readFileSync(UserPath, "utf8"))
function getdate() {
  const date = moment();
  return date.format("YYYY/DD/MM HH:mm:ss");
}

app.get("/timestamp", (req, res) => {
  res.json({ timestamp: getdate() });
});


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
    if (!skip){skip = 0
    }
    if (!take){take = Products.length
    }
    if (!Filter){filter = false}

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
    res.status(200).json(filteredPosts)
    
})
app.get("/posts/:id", (req, res) => {
    const product = ProductsJson[req.params.id]
    if (!product){
        res.status(404).json("продукт не знайдено")
        return;
    } 
    res.status(200).json({product: ProductsJson[postId]})

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