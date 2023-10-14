const Joi = require('joi');

/**create city */
const createCity = {
    body : Joi.object().keys({
        city_name : Joi.string().required().trim(),
        state : Joi.string().required().trim(),
        country : Joi.string().required().trim()
    })
};

/**list of city */
const getCityList = {
    query : Joi.object().keys()
};

module.exports = {
    createCity,
    getCityList
};

