const express = require("express");

const { adminValidation } = require('../../validations');
const { adminController } = require('../../controller');
const validate = require('../../middlewares/validate');

const router = express.Router();

/**create admin */
router.post(
    "/create-admin",
    validate(adminValidation.createAdmin),
    adminController.createAdmin
);

/**list of admin */
router.get(
    "/list",
    validate(adminValidation.getAdminList),
    adminController.getAdminList
);

/**update admin */
router.put(
    "/update-admin/:adminId",
    validate(adminValidation.updateDetails),
    adminController.updateDetails
);

/**delete admin */
router.delete(
    "/delete-admin/:adminId",
    validate(adminValidation.getDetails),
    adminController.deleteDetails
);

module.exports = router;