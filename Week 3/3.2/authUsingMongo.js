
const mongoose=require("mongoose")
mongoose.connect('mongodb+srv://admin:8bXLVZnvCKp928G@atlascluster.wljsgf7.mongodb.net/')
const User = mongoose.model('users',
{ name : String ,
    email_id: String ,
    password : String})
const user = new User({name : "sam",
 email_id:"patil@gmail.com",
 password:"121434"})
 
user.save()