const { cartService } = require('../services');

/**create cart */
const createCart = async(req,res) =>{
    try{
        const reqBody = req.body;

        const cart = await cartService.createCart(reqBody);
        if(!cart) {
            throw new Error ("Something went wrong, Please try again or later!");
        }
        res.status(200).json({
            success : true,
            message : "Cart create successfully!",
            data : { cart }
        })
    } catch(error){
        res.status(400).json({
            success : false,
            message : error.message
        });
    };
};

/** get cart list */
const getCartList = async(req,res) => {
    try {
        const { search, ...options } = req.query;
        let filter = {};

        const getList = await cartService.getCartList(filter,options);

        res.status(200).json({
            success : true,
            message : "Get cart list successfully!",
            data : getList
        });
    } catch (error) {
        res.status(400).json({
            success : false,
            message : error.message
        });
    }
};

/**delete cart */
const deleteDetails = async (req, res) => {
    try {
      const cartId = req.params.cartId;
      const cartExists = await cartService.getCartById(cartId);
      if (!cartExists) {
        throw new Error("Cart not found!");
      }

      await cartService.deleteDetails(cartId);
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

  /**cart by id */
  const updateDetails = async (req, res) => {
    try {
      const cartId = req.params.cartId;
      const cartExists = await cartService.getCartById(cartId);
      if (!cartExists) {
        throw new Error("Cart not found!");
      }

      await cartService.updateDetails(cartId, req.body);

      res.status(200).json({
        success: true,
        message: "Cart update successfully!",
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  };

  /**get cart details by id */
  const getCartDetails = async (req, res) => {
    try {
      const getDetails = await cartService.getCartById(req.params.cartId);
      if (!getDetails) {
        throw new Error("Cart not found");
      }

      res.status(200).json({
        success: true,
        message: "Cart details get successfully!",
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
    createCart,
    getCartList,
    getCartDetails,
    updateDetails,
    deleteDetails
}