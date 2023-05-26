const express = require("express")
const bodyParser = require("body-parser")
const app = express()
app.use(bodyParser.urlencoded({extended: true}))

const port = 8080

app.get("/", (req,res) => {

res.send("sample response")

})

app.listen(port, () => {

console.log("running server api")
})

// MYSQL_URL
// mysql://root:xHSyUggkGLMfwjaHJEEW@containers-us-west-19.railway.app:6812/railway


// MYSQLDATABASE
// railway


// MYSQLHOST
// containers-us-west-19.railway.app


// MYSQLPASSWORD
// xHSyUggkGLMfwjaHJEEW


// MYSQLPORT
// 6812


// MYSQLUSER
// root
