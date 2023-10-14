const Joi = require('joi');

/**create food */
const createFood = {
    body : Joi.object().keys({
        food_name : Joi.string().required().trim(),
        food_price : Joi.number().integer().required(),
        restaurant : Joi.string().required().trim()
    })
}

/**get list of food */
const getFoodList = {
    query : Joi.object().keys()
}

/**get details */
const getDetails = {
    params : Joi.object().keys({
        foodId : Joi.string().required().trim()
    })
}

/**update list of food */
const updateDetails = {
    params : Joi.object().keys({
        foodId : Joi.string().required().trim()
    }),
    body : Joi.object().keys({
        food_name : Joi.string().required().trim(),
        food_price : Joi.number().integer().required()
    })
}

module.exports = {
    createFood,
    getFoodList,
    getDetails,
    updateDetails
}
