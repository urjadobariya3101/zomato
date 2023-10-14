const express = require("express");

const { restaurantValidation } = require("../../validations");
const { restaurantController } = require("../../controller");
const validate = require("../../middlewares/validate");

const router = express.Router();

/**create restaurant */
router.post(
    "/create-restaurant",
    validate(restaurantValidation.createRestaurant),
    restaurantController.createRestaurant
);

/**list of restaurant */
router.get(
    "/list",
    validate(restaurantValidation.getRestaurantList),
    restaurantController.getRestaurantList
);

/**delete restaurant */
router.delete(
    "/delete-restaurant/:restaurantId",
    validate(restaurantValidation.getDetails),
    restaurantController.deleteDetails
    );

    /**update restaurant */
    router.put(
        "/update-restaurant/:restaurantId",
        validate(restaurantValidation.updateDetails),
        restaurantController.updateDetails
)

module.exports = router;