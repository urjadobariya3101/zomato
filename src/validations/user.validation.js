const Joi = require("joi");

/**create user */
const createUser = {
    body : Joi.object().keys({
        name : Joi.string().required().trim(),
        email : Joi.string().required().trim(),
        address : Joi.string().required().trim(),
        contactNo : Joi.number().integer().required()
    })
};

/**get user list */
const getUserList = {
    query : Joi.object().keys()
};

/**update user */
const updateDetails = {
    params : Joi.object().keys({
        userId : Joi.string().required().trim()
    }),
    body : Joi.object().keys({
        name : Joi.string().required().trim(),
        email : Joi.string().required().trim(),
        address : Joi.string().required().trim(),
        contactNo : Joi.number().integer().required()
    })
};

/**get details */
const getDetails = {
    params : Joi.object().keys({
        userId : Joi.string().required().trim()
    })
}

module.exports = {
    createUser,
    getUserList,
    updateDetails,
    getDetails
}