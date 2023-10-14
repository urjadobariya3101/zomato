const Joi = require('joi');

/**create order */
const createOrder = {
    body : Joi.object().keys({
        payment_method : Joi.string().required().trim(),
        cart : Joi.string().required().trim(),
        user : Joi.string().required().trim()
    })
}

/**get list of order */
const getOrderList = {
    query : Joi.object().keys()
}

/**get details */
const getDetails = {
    params : Joi.object().keys({
        orderId : Joi.string().required().trim()
    })
}

/**update list of order */
const updateDetails = {
    params : Joi.object().keys({
        orderId : Joi.string().required().trim()
    }),
    body : Joi.object().keys({
        payment_method : Joi.string().required().trim(),
        cart : Joi.string().required().trim(),
        user : Joi.string().required().trim()
    })
}

module.exports = {
    createOrder,
    getOrderList,
    getDetails,
    updateDetails
}
