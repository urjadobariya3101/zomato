const Joi = require('joi');

/**create Restaurant */
const createRestaurant = {
    body : Joi.object().keys({
        restro_name : Joi.string().required().trim(),
        Address : Joi.string().required().trim(),
        restro_image : Joi.string().required().allow(""),
        food_image : Joi.string().required().allow(""),
        restro_contactNo : Joi.number().integer().required(),
        owner : Joi.string().required().trim()
    })
};

/**list of Restaurant */
const getRestaurantList = {
    query : Joi.object().keys()
};

/**update details */
const updateDetails = {
    params : Joi.object().keys({
        restaurantId : Joi.string().required().trim()
    }),
    body : Joi.object().keys({
        restro_name : Joi.string().required().trim(),
        Address : Joi.string().required().trim(),
        restro_contactNo : Joi.number().integer().required()
    })
}

/**get restro list by id */
const getDetails = {
    params : Joi.object().keys({
        restaurantId : Joi.string().required().trim()
    })
};

module.exports = {
    createRestaurant,
    getRestaurantList,
    updateDetails,
    getDetails
};

