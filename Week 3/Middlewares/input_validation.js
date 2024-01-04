const express =require ("express")
const app =express()
app.use(express.json())
//here we are expecting only array input 
//if other send then they can see through our server 
//input validation is required
// we can do using if else but there are better ways to do it 
//we can use global catches
//every time if exception came then it uses global catches 
app.post("/",(req,res)=>{
    const kidney=req.body.kidneys;
    const kidney_length=kidney.length;
    res.send("length is "+ kidney_length)
})
//app.use with four arg 
app.use(function(err,req,res,next)
{
res.json({
    msg:"error"
})
})
app.listen(3000)