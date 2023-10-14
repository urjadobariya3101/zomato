const { countryService } = require('../services');

/**create country */
const createCountry = async(req,res) =>{
    try{
        const reqBody = req.body;

        const country = await countryService.createCountry(reqBody);
        if(!country) {
            throw new Error ("Something went wrong, Please try again or later!");
        }
        res.status(200).json({
            success : true,
            message : "Country create successfully!",
            data : { country }
        })
    } catch(error){
        res.status(400).json({
            success : false,
            message : error.message
        });
    };
};

/** get country list */
const getCountryList = async(req,res) => {
    try {
        const { search, ...options } = req.query;
        let filter = {};

        const getList = await countryService.getCountryList(filter,options);

        res.status(200).json({
            success : true,
            message : "Get country list successfully!",
            data : getList
        });
    } catch (error) {
        res.status(400).json({
            success : false,
            message : error.message
        });
    }
};

module.exports = {
    createCountry,
    getCountryList
}