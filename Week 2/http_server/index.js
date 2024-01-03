const express=require("express")
const app = express()
const port =3001
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
//hospital examplez
app.use(express.json())
const users =[{
    name :"sam",
    healthy_kidney:2,
    unhealthy_kidney:0
},
{
    name : "jack",
    healthy_kidney:1,
    unhealthy_kidney:1
}]
app.get("/",function(req,res){
    num_healthy =0;
    num_unhealthy=0;
    for (let i=0;i<users.length;i++)
    {
        let user =users[i]
        console.log(user)
        res.json({user})
    }
    
})
app.post("/",function(req,res){
    kid=req.body.healthy
    if(kid==true)
    {
        users[0].healthy_kidney = users[0].healthy_kidney +1;
    }
    else{
        users[0].unhealthy_kidney = users[0].unhealthy_kidney +1;
    }
    res.json({
        msg:"done"
    })
    
})
app.put("/",function(req,res){
    for (let i=0;i<users.length;i++)
    {
        users[i].healthy_kidney=2
    }
    res.json({
        msg:"done"
    })
})
app.delete("/",function(req,res){
    users[0].healthy_kidney=0
    res.json({meg:"deleted"})
}
)
app.listen(port)