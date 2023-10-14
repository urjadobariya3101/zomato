const mongoose = require('mongoose');

const restaurantTypeSchema = new mongoose.Schema(
    {
        restroType : {
            type : String,
            trim : true
        },
        restro_desc : {
            type : String,
            trim : true
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

const RestaurantType = mongoose.model("restaurantType", restaurantTypeSchema);
module.exports = RestaurantType;