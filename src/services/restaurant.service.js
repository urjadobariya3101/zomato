const { Restaurant } = require("../modules");

/** create Restaurant*/
const createRestaurant = async (reqBody) => {
  return Restaurant.create(reqBody);
};

/**list of Restaurant  */
const getRestaurantList = async () => {
  return Restaurant.find().populate("owner");
};

/**get restro list */
const getRestaurantById = async(restaurantId) => {
  return Restaurant.findById(restaurantId);
};

/**delete restaurant */
const deleteDetails = async(restaurantId) => {
  return Restaurant.findByIdAndDelete(restaurantId);
};

/**update restro */
const updateDetails = async (restaurantId) => {
  return Restaurant.findByIdAndUpdate(restaurantId);
};

module.exports = {
  createRestaurant,
  getRestaurantList,
  deleteDetails,
  getRestaurantById,
  updateDetails
};
