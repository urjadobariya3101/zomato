const express = require("express");

const { countryValidation } = require("../../validations");
const { countryController } = require("../../controller");
const validate = require("../../middlewares/validate");

const router = express.Router();

/**create country */
router.post(
    "/create-country",
    validate(countryValidation.createCountry),
    countryController.createCountry
);

/**get list of country */
router.get(
    "/list",
    validate(countryValidation.getCountryList),
    countryController.getCountryList
);

module.exports = router;