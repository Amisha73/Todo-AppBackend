// import model
const Todo = require("../models/todo");

// default route handler
exports.getTodo = async (req, res) => {
    try {
        // fetch all todo items from db
        const todos = await Todo.find({});

        // response
        res.status(200).json({
            success: true,
            data: todos,
            message: "Entire todo data is fetched"
        })
    }
    catch (err) {
        console.error(err);
        res.status(500).json({
            success:false,
            data : "server error",
            message : err.message,
        })
    }

}


exports.getTodoById = async (req, res) => {
    try {
        // fetch all todo items basis on id from db
        const id = req.params.id;
        const todo = await Todo.findById({_id : id});


        // data for given id no found
        if(!todo){
            res.status(404).json({
                success: false,
                message: "No data found with id"
            })
        }
        // data for given id found
        res.status(200).json({
            success: true,
            data: todo,
            message: `Todo ${id} data successfully fetched`,
        })
    }
    catch (err) {
        console.error(err);
        res.status(500).json({
            success:false,
            data : "server error",
            message : err.message,
        })
    }

}