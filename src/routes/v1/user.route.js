const express = require("express");

const { userValidation } = require("../../validations");
const { userController } = require("../../controller");
const validate = require("../../middlewares/validate");

const router = express.Router();

/**create user */
router.post(
    "/create-user",
    validate(userValidation.createUser),
    userController.createUser
);

/**list of user */
router.get(
    "/list",
    validate(userValidation.getUserList),
    userController.getUserList
);

/**update user */
router.put(
    "/update-create/:userId",
    validate(userValidation.updateDetails),
    userController.updateDetails
);

/**delete user */
router.delete(
    "/delete-user/:userId",
    validate(userValidation.getDetails),
    userController.deleteDetails
);

module.exports = router;