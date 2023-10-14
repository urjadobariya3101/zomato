const { foodService } = require("../services");

/**create food */
const createFood = async (req, res) => {
  try {
    const reqbody = req.body;
    const food = await foodService.createFood(reqbody);
    if (!food) {
      throw new Error("Something went wrong , please try again or later");
    }

    res.status(200).json({
      success: true,
      message: "Food create successfully!",
      data: { food },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/**get list of food */
const getFoodList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    const getList = await foodService.getFoodList(filter, options);

    res.status(200).json({
      success: true,
      message: "Get food list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/**delete food */
const deleteDetails = async (req, res) => {
  try {
    const foodId = req.params.foodId;
    const foodExists = await foodService.getFoodById(foodId);
    if (!foodExists) {
      throw new Error("Food not found!");
    }

    await foodService.deleteDetails(foodId);
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

/**food by id */
const updateDetails = async (req, res) => {
  try {
    const foodId = req.params.foodId;
    const foodExists = await foodService.getFoodById(foodId);
    if (!foodExists) {
      throw new Error("Food not found!");
    }

    await foodService.updateDetails(foodId, req.body);

    res.status(200).json({
      success: true,
      message: "Food update successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/**get food details by id */
const getFoodDetails = async (req, res) => {
  try {
    const getDetails = await foodService.getFoodById(req.params.foodId);
    if (!getDetails) {
      throw new Error("Food not found");
    }

    res.status(200).json({
      success: true,
      message: "Food details get successfully!",
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
  createFood,
  getFoodList,
  deleteDetails,
  updateDetails,
  getFoodDetails,
};
