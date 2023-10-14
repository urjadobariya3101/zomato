const { Order } = require("../modules");

/**create order */
const createOrder = async(reqBody) => {
    return Order.create(reqBody);
}

/**get order list */
const getOrderList = async() => {
    return Order.find().populate("cart").populate("user");
}

/**get order list by id */
const getOrderById = async(orderId) => {
    return Order.findById(orderId);
}

/**update details */
const updateDetails = async(orderId) => {
    return Order.findByIdAndUpdate(orderId);
}

/**delete order */
const deleteDetails = async(orderId) => {
    return Order.findByIdAndDelete(orderId);
}

module.exports = {
    createOrder,
    getOrderList,
    getOrderById,
    updateDetails,
    deleteDetails
}