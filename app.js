const express = require('express')
const app = express() 
const port = 3000

app.use(express.static("public"))

app.get("/home", (req, res) => {

    res.sendFile(__dirname + "/views/home.html")

})

app.get("/about.html", (req,res) => {

    res.sendFile(__dirname + "/views/about.html")

})

app.get("/photo-gallery.html", (req, res) => {

    res.sendFile(__dirname + "/views/photo-gallery.html")

})

app.get("/works.html" , (req, res) => {

    res.sendFile(__dirname + "/views/works.html")

})

app.get("*", (req, res) => {

    res.send("No existe lo que buscas")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })