const { default: mongoose } = require("mongoose");

const prodschema = mongoose.Schema(
    {
        ProductName: {
            type : String,
            required: [ true,"enter a valid product name:"] ,
            
        },
        Description: {
            type : String,
            required : false
        },
        Price:{
            type : Number,
            required : true,
            default :0
        },
        Quantity:{
            type: Number,
            required: false,
            default :0
        }
    },
    {
    Timestamp: true
    }
)

const productmodel = mongoose.model("products",prodschema);
module.exports = productmodel;
