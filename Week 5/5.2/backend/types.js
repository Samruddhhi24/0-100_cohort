const zod= require("zod")

const createtodo=zod.object({
    tittle:zod.string(),
    description:zod.string()

})
const updatetodo=zod.object({
    id:zod.string()

})
module.exports={
createtodo:createtodo, 
updatetodo:updatetodo

}