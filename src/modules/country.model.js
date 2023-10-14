const mongoose = require("mongoose");

const countrySchema = new mongoose.Schema(
    {
        country_name : {
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

const Country = mongoose.model("country",countrySchema);
module.exports = Country;