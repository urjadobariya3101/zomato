const express = require("express");

const { restaurantTypeValidation } = require("../../validations");
const { restaurantTypeController } = require("../../controller");
const validate = require("../../middlewares/validate");

const router = express.Router();

/**create restaurantType */
router.post(
    "/create-restaurantType",
    validate(restaurantTypeValidation.createRestaurantType),
    restaurantTypeController.createRestaurantType
);

/**list of restaurantType */
router.get(
    "/list",
    validate(restaurantTypeValidation.getRestaurantTypeList),
    restaurantTypeController.getRestaurantTypeList
);

/**update restaurantType */
router.put(
    "/update-restaurantType/:restaurantTypeId",
    validate(restaurantTypeValidation.updateDetails),
    restaurantTypeController.updateDetails
);

/**delete restaurantType */
router.delete(
    "/delete-restaurantType/:restaurantTypeId",
    validate(restaurantTypeValidation.getDetails),
    restaurantTypeController.deleteDetails
);

module.exports = router;