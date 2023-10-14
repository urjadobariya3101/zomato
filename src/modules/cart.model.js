const mongoose = require("mongoose");

const cart_Schema = new mongoose.Schema(
    {
        total_items:{
            type:Number,
            trim : true
        },
        total_price:{
            type:Number,
            trim : true
        },
        user: {
            type: mongoose.Types.ObjectId,
            ref: "user"
        },
        food: {
            type: mongoose.Types.ObjectId,
            ref: "food"
        },
        is_active:{
            type:Boolean,
            default:true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const Cart = mongoose.model("cart",cart_Schema)
module.exports = Cart;