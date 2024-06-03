// import model
const Todo = require("../models/todo");

// default route handler
 exports.updateTodo = async(req, res) => {
    try{
        
       const{id}=req.params;
       const {title, description} = req.body;
       const todo = await Todo.findByIdAndUpdate(
        {_id: id},
        {title, description, updatedAt: Date.now()},
       )
       res.status(200).json({
        success : true,
        data: todo,
        message : `updated Successfully`,
       })
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500).json({
            success:false,
            data : "internal server error",
            message : err.message,
        })
    }

 }