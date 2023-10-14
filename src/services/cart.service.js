const { Cart } = require("../modules");

/** create cart*/
const createCart = async (reqBody) => {
  return Cart.create(reqBody);
};

/**list of cart  */
const getCartList = async () => {
  return Cart.find().populate("user").populate("food");
};

/**get cart list by id */
const getCartById = async(cartId) => {
    return Cart.findById(cartId);
}

/** update details */
const updateDetails = async(cartId) => {
    return Cart.findByIdAndUpdate(cartId);
}

/**delete details */
const deleteDetails = async(cartId) => {
    return Cart.findByIdAndDelete(cartId);
}

module.exports = {
  createCart,
  getCartList,
  getCartById,
  updateDetails,
  deleteDetails
};
