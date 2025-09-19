// const express = require("express");
// const moment = require("moment"); 
// const HOST = "127.0.0.1";
// const PORT = 8000;


// function getTime() {
//   return moment().format("YYYY/MM/DD HH:mm:ss");
// }


// express.get("/timestamp", (req, res) => {
//   const Time = getTime();
//   res.json({ timestamp: Time });
// });

// // Запуск сервера
// express.listen(PORT, () => {
//   console.log(`Сервер запущен: http://${HOST}:${PORT}`);
// });
let moment = require("moment")()
const express = require("express")()
const HOST = "127.0.0.1"
const PORT = 8000
express.get("/timestamp", (req,res) => {
    send({date: moment.format("y/D/M H:m:s")})
})
express.listen(PORT,HOST, () =>{ 
    console.log(`http://${HOST}:${PORT}`)
})