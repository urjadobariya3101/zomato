const { orderService } = require("../services");

/**create order */
const createOrder = async (req, res) => {
  try {
    const reqBody = req.body;

    const order = await orderService.createOrder(reqBody);
    if (!order) {
      throw new Error("Something went wrong, Please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "Order create successfully!",
      data: { order },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/**get order list */
const getOrderList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [];
    }

    const getList = await orderService.getOrderList(filter, options);

    res.status(200).json({
      success: true,
      message: "Get order list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/**delete order */
const deleteDetails = async (req, res) => {
  try {
    const orderId = req.params.orderId;
    const orderExists = await orderService.getOrderById(orderId);
    if (!orderExists) {
      throw new Error("Order not found!");
    }

    await orderService.deleteDetails(orderId);
    res.status(200).json({
      success: true,
      message: "Delete data successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/**order by id */
const updateDetails = async (req, res) => {
  try {
    const orderId = req.params.orderId;
    const orderExists = await orderService.getOrderById(orderId);
    if (!orderExists) {
      throw new Error("Order not found!");
    }

    await orderService.updateDetails(orderId, req.body);

    res.status(200).json({
      success: true,
      message: "Order update successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/**get order details by id */
const getOrderDetails = async (req, res) => {
  try {
    const getDetails = await orderService.getOrderById(req.params.orderId);
    if (!getDetails) {
      throw new Error("Order not found");
    }

    res.status(200).json({
      success: true,
      message: "Order details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createOrder,
  getOrderList,
  deleteDetails,
  updateDetails,
  getOrderDetails
};