const express =require("express")
const { createtodo, updatetodo } = require("./types")
const {todo}=require("./db")
const App=express()
App.use(express.json())

App.post("/todo",async function(req,res){
    const createPayload=req.body
    const paresePayload=createtodo.safeParse(createPayload)
    if(! paresePayload.success)
    {
        res.status(411).json({
            msg:"you sent incorrect inputs"
        })
        
        return
    }
    await todo.create({
        tittle:createPayload.tittle,
        description:createPayload.description,
        completed:false

    })
    res.json({
        msg:"Todo created"
    })

})
App.get("/todos",async function(req,res){
    const todos=await todo.find()
    res.json({
        todos
    })
})
App.put("/completed",async function(req,res){
    const createPayload=req.body
    const paresePayload=updatetodo.safeParse(createPayload)
    if(! paresePayload.success)
    {
        res.status(411).json({
            msg:"not correct input"
        })

        return
    }
    await todo.findOneAndUpdate({
        _id:req.body.id
    },
    {
        completed:true
    }
    )
    res.json({
        msg:"todo marked as completed"
    })
})
App.listen(3002)