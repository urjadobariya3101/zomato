const { restaurantService } = require("../services");

/**create restaurant */
const createRestaurant = async (req, res) => {
  try {
    const reqBody = req.body;

    const restaurant = await restaurantService.createRestaurant(reqBody);
    if (!restaurant) {
      throw new Error("Something went wrong, Please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "Restaurant create successfully!",
      data: { restaurant },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/**get restaurant list */
const getRestaurantList = async (req, res) => {
  try {
    const { search, ...options } = req.query;

    const getList = await restaurantService.getRestaurantList(filter, options);

    res.status(200).json({
      success: true,
      message: "Get restaurant list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/**delete restaurant */
const deleteDetails = async (req, res) => {
  try {
    const restaurantId = req.params.restaurantId;
    const restaurantExists = await restaurantService.getRestaurantById(restaurantId);
    if (!restaurantExists) {
      throw new Error("Restaurant not found!");
    }

    await restaurantService.deleteDetails(restaurantId);
    res.status(200).json({
      success: true,
      message: "Delete data successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/**restaurant by id */
const updateDetails = async (req, res) => {
  try {
    const restaurantId = req.params.restaurantId;
    const restaurantExists = await restaurantService.getRestaurantById(restaurantId);
    if (!restaurantExists) {
      throw new Error("Restaurant not found!");
    }

    await restaurantService.updateDetails(restaurantId, req.body);

    res.status(200).json({
      success: true,
      message: "Restaurant update successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/**get restaurant details by id */
const getRestaurantDetails = async (req, res) => {
  try {
    const getDetails = await restaurantService.getRestaurantById(req.params.restaurantId);
    if (!getDetails) {
      throw new Error("Restaurant not found");
    }

    res.status(200).json({
      success: true,
      message: "Restaurant details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createRestaurant,
  getRestaurantList,
  getRestaurantDetails,
  deleteDetails,
  updateDetails,
};