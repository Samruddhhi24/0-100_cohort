const express =require ("express")
const app =express()
const zod= require("zod")
app.use(express.json())
//here we are expecting only array input 
//if other send then they can see through our server 
//input validation is required
// we can do using if else but there are better ways to do it 
//we can use global catches
//every time if exception came then it uses global catches 
/*app.post("/",(req,res)=>{
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
})*/

//we can do input validation using zod 
//this only handle the input validation
//this do not exception
//it is not mandatory to use zod with the http servers only we can use them in the normal code also to validate input 
const schema =zod.array(zod.number());
app.post("/",(req,res)=>{
    const kidney=req.body.kidneys;
    const kidney_length=kidney.length;
    let response =schema.safeParse(kidney)
    res.send(response)
})

app.listen(3000)