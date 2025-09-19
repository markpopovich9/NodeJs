
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