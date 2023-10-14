const express = require("express");

const { foodValidation } = require("../../validations");
const { foodController } = require("../../controller");
const validate = require("../../middlewares/validate");

const router = express.Router();

/**create food*/
router.post(
    "/create-food",
    validate(foodValidation.createFood),
    foodController.createFood
);

/**list of food */
router.get(
    "/list",
    validate(foodValidation.getFoodList),
    foodController.getFoodList
);

/**update food */
router.put(
    "/update-food/:foodId",
    validate(foodValidation.updateDetails),
    foodController.updateDetails
);

/**delete food */
router.delete(
    "/delete-food/:foodId",
    validate(foodValidation.getDetails),
    foodController.deleteDetails
);

module.exports = router;