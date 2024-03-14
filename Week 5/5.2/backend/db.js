const mongoose=require("mongoose")

mongoose.connect("mongodb+srv://admin:8bXLVZnvCKp928G@atlascluster.wljsgf7.mongodb.net/")
const todoschema=mongoose.Schema({
    tittle:String,
    description:String,
    Completed:Boolean
})
const todo=mongoose.model('todos',todoschema)
module.exports=({
    todo:todo
})