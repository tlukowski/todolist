const express = require('express')
const app = express()
const port = 3000
const path = require('path')

const client = require("./db.js")
const db = client.db
const User = require('./dbschemas/user')

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static(__dirname + '/public'))
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))


app.get('/', async (req, res) => {
    try
    {
        res.render("")
    }
    catch (e)
    {
        console.log(e);
    }
})