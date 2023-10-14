const express = require("express");

const { orderValidation } = require("../../validations");
const { orderController }  = require("../../controller");
const validate = require("../../middlewares/validate");

const router = express.Router();

/**create order */
router.post(
    "/create-order",
    validate(orderValidation.createOrder),
    orderController.createOrder
);

/**list of order */
router.get(
    "/list",
    validate(orderValidation.getOrderList),
    orderController.getOrderList
);

/**delete order */
router.delete(
    "/delete-order/:orderId",
    validate(orderValidation.getDetails),
    orderController.deleteDetails
);

/**update order */
router.put(
    "/update-order/:orderId",
    validate(orderValidation.updateDetails),
    orderController.updateDetails
);

module.exports = router;
