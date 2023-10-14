const Joi = require("joi");

/**create restaurantType */
const createRestaurantType = {
  body: Joi.object().keys({
    restroType: Joi.string().required().trim(),
    restro_desc: Joi.string().required().trim(),
  }),
};

/**get list of restaurantType */
const getRestaurantTypeList = {
  query: Joi.object().keys(),
};

/**update restaurantType */
const updateDetails = {
  params: Joi.object().keys({
    restaurantTypeId: Joi.string().required().trim(),
  }),
  body: Joi.object().keys({
    restroType: Joi.string().required().trim(),
    restro_desc: Joi.string().required().trim(),
  }),
};

/**get details of restaurantType */
const getDetails = {
  params: Joi.object().keys({
    restaurantTypeId: Joi.string().required().trim(),
  })
};

module.exports = {
    createRestaurantType,
    getRestaurantTypeList,
    updateDetails,
    getDetails
}
