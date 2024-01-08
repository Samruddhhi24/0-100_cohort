const express =require("express")
const app =express()
const jwt =require("jsonwebtoken")
//const dec =require("jwt-decode")
const jwtPassword ="123456"
app.use(express.json())
const ALL_USERS = [
    {
      username: "harkirat@gmail.com",
      password: "123",
      name: "harkirat singh",
    },
    {
      username: "raman@gmail.com",
      password: "123321",
      name: "Raman singh",
    },
    {
      username: "priya@gmail.com",
      password: "123321",
      name: "Priya kumari",
    },
  ];
  function userexists(username,password)
  {
    let result  =false
    for (let i=0;i<ALL_USERS.length;i++)
    {
        if(ALL_USERS[i].username ==username && ALL_USERS[i].password==password)
        {
            result=true
        }

    }
    return result;
  }
  app.post("/signin",function(req,res)
  {
    const username =req.headers.username
    const password =req.headers.password
    if(!userexists(username,password))
    {
        return res.status(403).json({
            msg:"user does not exists"
        })
    }
    var token = jwt.sign((username,password),jwtPassword)
    return res.json({
        token
    })
  })
  app.get("/users",function(req,res)
  {
    const token =req.headers.authorization
    
        const decode =jwt.verify(token,jwtPassword)
        const username =decode.username
        //const user=dec(token)
        return res.json({
            user:ALL_USERS.filter(function(value){
                if(value.username==username)
                {
                    return true
                }
                else{
                    return false
                }
            })
        })
    
    
    
  })
  app.listen(3000)