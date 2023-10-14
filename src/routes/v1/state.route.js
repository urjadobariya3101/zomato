const express = require("express");

const { stateValidation } = require("../../validations");
const { stateController } = require("../../controller");
const validate = require("../../middlewares/validate");

const router = express.Router();

/**create state */
router.post(
    "/create-state",
    validate(stateValidation.createState),
    stateController.createState
);

/**list of state */
router.get(
    "/list",
    validate(stateValidation.getStateList),
    stateController.getStateList
)

module.exports = router;