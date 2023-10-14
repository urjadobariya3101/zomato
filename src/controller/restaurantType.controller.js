const { restaurantTypeService } = require("../services");

/** create restaurantType */
const createRestaurantType = async (req, res) => {
  try {
    const reqbody = req.body;

    const restaurantType = await restaurantTypeService.createRestaurantType(
      reqbody
    );
    if (!restaurantType) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "RestaurantType create successfully!",
      data: { restaurantType },
    });
  } catch (error) {
    res.staus(400).json({
      success: false,
      message: error.message,
    });
  }
};

/**get list of restaurantType */
const getRestaurantTypeList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    const getList = await restaurantTypeService.getRestaurantTypeList(
      filter,
      options
    );

    res.status(200).json({
      success: true,
      message: "get restaurantType list successfully!",
      data: { getList },
    });

  } catch (error) {
    res.staus(400).json({
      success: false,
      message: error.message,
    });
  }
};

/**update restaurantType */
const updateDetails = async(req,res) => {
    try {
        const restaurantTypeId = req.parmas.restaurantTypeId;
        const restaurantTypeExists = restaurantTypeService.getRestaurantTypeById(restaurantTypeId);
        if(!restaurantTypeExists) {
            throw new Error ("RestaurantType not found")
        }

        await restaurantTypeService.updateDetails(restaurantTypeId, req.body);

        res.status(200).json({
            success: true,
            message: "RestaurantType update successfully!",
          });
        } catch (error) {
          res.status(400).json({
            success: false,
            message: error.message,
          });
    }
};

/**delete restaurantType */
const deleteDetails = async(req,res) => {
    try {
        const restaurantTypeId = req.params.restaurantTypeId;
        const restaurantTypeExists = await restaurantTypeService.getRestaurantTypeById(restaurantTypeId);
        if(!restaurantTypeExists) {
            throw new Error ("RestaurantType not found")
        }

        await restaurantTypeService.getRestaurantTypeById(restaurantTypeId);

        res.status(200).json({
            success : true,
            message : "RestaurantType delete successfully!",
        })
    } catch (error) {
        res.status(400).json({
            success : false,
            message : error.message
        })
    }
};

/** get restaurantType details */
const getRestaurantTypeDetails = async (req, res) => {
    try {
      const getDetails = await restaurantTypeService.getRestaurantTypeById(req.params.restaurantTypeId);
      if (!getDetails) {
        throw new Error("RestaurantType not found!");
      }

      res.status(200).json({
        success: true,
        message: "RestaurantType details get successfully!",
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
    createRestaurantType,
    getRestaurantTypeList,
    updateDetails,
    deleteDetails,
    getRestaurantTypeDetails
}