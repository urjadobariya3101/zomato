const Joi = require("joi");

/**create cart */
const createCart = {
    body : Joi.object().keys({
        total_items : Joi.string().required().trim(),
        total_price : Joi.number().integer().required(),
        user : Joi.string().required().trim(),
        food : Joi.string().required().trim()
    })
}

/**get details */
const getCartList = {
    query : Joi.object().keys()
}

/**get details */
const getDetails = {
    params : Joi.object().keys({
        cartId : Joi.string().required().trim()
    })
}

/**update details */
const updateDetails = {
    params : Joi.object().keys({
        cartId : Joi.string().required().trim()
    }),
    body : Joi.object().keys({
        total_items : Joi.string().required().trim(),
        total_price : Joi.number().integer().required(),
        user : Joi.string().required().trim(),
        food : Joi.string().required().trim()
    })
}

module.exports = {
    createCart,
    getCartList,
    getDetails,
    updateDetails
}