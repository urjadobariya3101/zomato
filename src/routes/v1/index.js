const express = require("express");

const countryRouter = require("./country.route");
const stateRouter = require("./state.route");
const cityRouter = require("./city.route");
const restaurantRouter = require("./restaurant.route");
const ownerRouter = require("./owner.route");
const userRouter = require("./user.route");
const restaurantTypeRouter = require("./restaurantType.route");
const foodRouter = require("./food.route");
const orderRouter = require("./order.route");
const cartRouter = require("./cart.route");
const adminRouter = require("./admin.route");

const router = express.Router();

router.use("/country", countryRouter);
router.use("/state", stateRouter);
router.use("/city", cityRouter);
router.use("/restaurant", restaurantRouter);
router.use("/owner", ownerRouter);
router.use("/user", userRouter);
router.use("/restaurantType", restaurantTypeRouter);
router.use("/food", foodRouter);
router.use("/order", orderRouter);
router.use("/cart", cartRouter);
router.use("/admin", adminRouter);

module.exports = router;
