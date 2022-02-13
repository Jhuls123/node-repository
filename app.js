const express = require("express")
const fs = require("path")
require("dotenv").config()
const app = express()

app.use(express.static(fs.join(__dirname, "../client/build")))
app.get("/", (req, res) => {
    res.sendFile(fs.join(__dirname, "../client/build", "index.html"))
})

app.listen(process.env.PORT || 3001, () => console.log("Server is running..."))