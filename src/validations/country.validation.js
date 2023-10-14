const Joi = require('joi');

/**create country */
const createCountry = {
    body : Joi.object().keys({
        country_name : Joi.string().required().trim()
    })
};

/**list of country */
const getCountryList = {
    query : Joi.object().keys()
};

module.exports = {
    createCountry,
    getCountryList
};

