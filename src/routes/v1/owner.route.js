const express = require("express");

const { ownerValidation } = require("../../validations");
const { ownerController } = require("../../controller");
const validate = require("../../middlewares/validate");

const router = express.Router();

/**create owner */
router.post(
    "/create-owner",
    validate(ownerValidation.createOwner),
    ownerController.createOwner
);

/**list of owner */
router.get(
    "/list",
    validate(ownerValidation.getOwnerList),
    ownerController.getOwnerList
);

/**delete owner */
router.delete(
    "/delete-owner/:ownerId",
    validate(ownerValidation.getDetails),
    ownerController.deleteDetails
    );

    /**update owner */
    router.put(
        "/update-owner/:ownerId",
        validate(ownerValidation.updateDetails),
        ownerController.updateDetails
)

module.exports = router;