const mongoose = require('mongoose');

const ownerSchema = new mongoose.Schema(
    {
        owner_name : {
            type : String,
            trim : true
        },
        email : {
            type : String,
            trim : true
        },
        mobileNo : {
            type : Number,
            trim : true
        },
        restaurant : {
            type : mongoose.Types.ObjectId,
            ref : "restaurant"
        },
        is_active : {
            type :Boolean,
            trim : true
        }
    },
    {
        timestamps : true,
        versionKey : false
    }
);

const Owner = mongoose.model("owner", ownerSchema);
module.exports = Owner;