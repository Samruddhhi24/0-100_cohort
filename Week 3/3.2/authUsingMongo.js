
const mongoose=require("mongoose")
const express=require("express")
const app = express()
app.use(express.json())

mongoose.connect('mongodb+srv://admin:8bXLVZnvCKp928G@atlascluster.wljsgf7.mongodb.net/')
const User = mongoose.model('users',{ name : String ,email_id: String ,password : String})
app.post("/signup",async (req,res)=>{
    const username = req.body.username
    const password =req.body.password
    const name =req.body.name
    const userexists = await User.findOne({email_id:username})
    if(userexists)
    {
        res.status(400).json({
            msg:"user already exists"
        })
    
        
    }
    else{
        const user = new User({name : name,
            email_id:username,
            password:password})
            user.save()
            res.status(200).json({
                msg:"user sign up successfull"
            })
        }
        

    

})

 

app.listen(3000)