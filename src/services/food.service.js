const { Food } = require("../modules");

/**create food */
const createFood = async(reqBody) => {
    return Food.create(reqBody);
};

/**list of food */
const getFoodList = async() => {
    return Food.find().populate("restaurant");
}

/**get food by id */
const getFoodById = async(foodId) => {
    return Food.findById(foodId);
}

/**update details */
const updateDetails = async(foodId) => {
    return Food.findByIdAndUpdate(foodId);
}

/**delete food */
const deleteDetails = async (foodId) => {
    return Food.findByIdAndDelete(foodId);
}

module.exports = {
    createFood,
    getFoodList,
    getFoodById,
    updateDetails,
    deleteDetails
}