const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
    {
        payment_method : {
            type : String,
            trim : true
        },
        cart : {
            type : mongoose.Types.ObjectId,
            ref : "cart"
        },
        user : {
            type : mongoose.Types.ObjectId,
            ref : "user"
        },
        is_active : {
            type : Boolean,
            trim : true
        }
    },
    {
        timestamps : true,
        versionKey : false
    }
);

const Order = mongoose.model("order", orderSchema);
module.exports = Order;