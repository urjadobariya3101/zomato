const { cityService } = require('../services');

/**create city */
const createCity = async(req,res) =>{
    try{
        const reqBody = req.body;

        const city = await cityService.createCity(reqBody);
        if(!city) {
            throw new Error ("Something went wrong, Please try again or later!");
        }
        res.status(200).json({
            success : true,
            message : "City create successfully!",
            data : { city }
        })
    } catch(error){
        res.status(400).json({
            success : false,
            message : error.message
        });
    };
};

/** get city list */
const getCityList = async(req,res) => {
    try {
        const { search, ...options } = req.query;
        let filter = {};

        const getList = await cityService.getCityList(filter,options);

        res.status(200).json({
            success : true,
            message : "Get city list successfully!",
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
    createCity,
    getCityList
}