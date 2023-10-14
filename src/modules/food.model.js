const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema (
    {
        food_name : {
            type : String,
            trim : true
        },
        food_price : {
            type : Number,
            trim : true
        },
        restaurat : {
            type : mongoose.Types.ObjectId,
            ref : "restaurant"
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

const Food = mongoose.model("food", foodSchema);
module.exports = Food;