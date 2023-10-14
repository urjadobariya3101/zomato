const { stateService } = require('../services');

/**create state */
const createState = async(req,res) =>{
    try{
        const reqBody = req.body;

        const state = await stateService.createState(reqBody);
        if(!state) {
            throw new Error ("Something went wrong, Please try again or later!");
        }
        res.status(200).json({
            success : true,
            message : "State create successfully!",
            data : { state }
        })
    } catch(error){
        res.status(400).json({
            success : false,
            message : error.message
        });
    };
};

/** get state list */
const getStateList = async(req,res) => {
    try {
        const { search, ...options } = req.query;
        let filter = {};

        const getList = await stateService.getStateList(filter,options);

        res.status(200).json({
            success : true,
            message : "Get state list successfully!",
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
    createState,
    getStateList
}