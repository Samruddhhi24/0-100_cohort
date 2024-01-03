const express = require("express")
const app = express()
//basic code that do authentication by if and else using headers
app.get("/kidney",function(req, res){
    let kidneyid=req.query.n
    let username =req.headers.username
    let password =req.headers.password
    if (username != "sam" && password !="pass")
    {
        // this is not possible to have two response in one if statement 
        //res.json({
           // meg :"authentication success"
        //})
        // if (kidneyid ==1 || kidneyid ==2)
        // {
        //     res.json({mes: "bad req"})
        // }
        //write way to do is 
        res.status(400).json({
            msg:"authentication success"
        })
        return
    }
    // else{
    //     res.status(403).json({
    //         error:"authentication failed"
    //     })
    //     //instead of else we can do early return 
    // }
    if (kidneyid !=1 && kidneyid !=2)
    {
        res.status(400).json({msg:"ok"})
    }
    res.json({msg: "everthing is all right"})
    
})
app.listen(3000)
