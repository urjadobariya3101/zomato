const Joi = require('joi');

/**create State */
const createState = {
    body : Joi.object().keys({
        state_name : Joi.string().required().trim(),
        country : Joi.string().required().trim()
    })
};

/**list of State */
const getStateList = {
    query : Joi.object().keys()
};

module.exports = {
    createState,
    getStateList
};

