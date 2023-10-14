const { RestaurantType } = require('../modules');

/**create restaurantType */
const createRestaurantType  =  async(reqBody) => {
    return RestaurantType.create(reqBody);
};

/**list of RestaurantType */
const getRestaurantTypeList = async() => {
    return RestaurantType.find();
}

/**get RestaurantType by id */
const getRestaurantTypeById = async(restaurantTypeId) => {
    return RestaurantType.findById(restaurantTypeId);
}

/**delete details */
const deleteDetails = async(restaurantTypeId) => {
    return RestaurantType.findByIdAndDelete(restaurantTypeId);
}

/**update details */
const updateDetails = async(restaurantTypeId) => {
    return RestaurantType.findByIdAndUpdate(restaurantTypeId);
}

module.exports = {
    createRestaurantType,
    getRestaurantTypeList,
    getRestaurantTypeById,
    updateDetails,
    deleteDetails
}