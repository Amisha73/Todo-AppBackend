const { default: mongoose } = require("mongoose");
const mangoose = require("mongoose");

const todoSchema = new mangoose.Schema(
    {
        title : {
            type : String,
            require : true,
            maxLength : 50,
        },
        description:{
            type : String,
            require : true,
            maxLength : 50,
        },
        createdAt:{
            type:Date,
            require:true,
            default : Date.now(),
        },
        updatedAt:{
            type:Date,
            require:true,
            default : Date.now(),
        }
    }
);

module.exports = mongoose.model("Todo", todoSchema);