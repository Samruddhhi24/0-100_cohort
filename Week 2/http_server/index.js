const express=require("express")
const app = express()
const port =3000
//basic http server
/*function get_req(req,res)
 {
     res.send("hello world")
 }
app.get('/',get_req)
app.get('/',function(req,res){
    res.send("hello world")
})
app.listen(port)*/
/*
// adding query parameter
function sum(n)
{
    let ans =0
    for (let i=0; i<n;i++)
    {
        ans +=i;
    }
    return ans;
}
app.get("/",function(req,res){
    const n=req.query.n
    const ans =sum(n)
    res.send("Sum of "+n+"number is "+ans)
})
app.listen(port);
*/
