const express=require("express")
const app = express()
const port =3000
// function get_req(req,res)
// {
//     res.send("hello world")
// }
//app.get('/',get_req)
app.get('/',function(req,res){
    res.send("hello world")
})
app.listen(port)