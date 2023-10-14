const express = require("express");

const { cityValidation } = require("../../validations");
const { cityController } = require("../../controller");
const validate = require("../../middlewares/validate");

const router = express.Router();

/**create city */
router.post(
    "/create-city",
    validate(cityValidation.createCity),
    cityController.createCity
);

/**get list of city */
router.get(
    "/list",
    validate(cityValidation.getCityList),
    cityController.getCityList
);

module.exports = router;