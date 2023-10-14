const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema(
    {
        restro_name : {
            type : String,
            trim : true
        },
        Address : {
            type : String,
            trim : true
        },
        restro_contactNo : {
            type : Number,
            trim : true
        },
        restro_image : {
            type : String
        },
        food_image : {
            type : String
        },
        owner : {
            type : mongoose.Types.ObjectId,
            ref : "owner"
        },
        is_active : {
            type : Boolean,
            trim : true
        }
    },{
        timestamps : true,
        versionKey : false
    }
);

const Restaurant = mongoose.model("restaurant", restaurantSchema);
module.exports = Restaurant;