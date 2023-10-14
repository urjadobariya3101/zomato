const Joi = require('joi');

/**create Owner */
const createOwner = {
    body : Joi.object().keys({
        owner_name : Joi.string().required().trim(),
        email : Joi.string().required().trim(),
        mobileNo : Joi.number().integer().required(),
        restaurant : Joi.string().required().trim()
    })
};

/**list of Owner */
const getOwnerList = {
    query : Joi.object().keys()
};

/**update details */
const updateDetails = {
    params : Joi.object().keys({
        ownerId : Joi.string().required().trim()
    }),
    body : Joi.object().keys({
        owner_name : Joi.string().required().trim(),
        email : Joi.string().required().trim(),
        mobileNo : Joi.number().integer().required(),
        restaurant : Joi.string().required().trim()
    })
}

/**get restro list by id */
const getDetails = {
    params : Joi.object().keys({
        ownerId : Joi.string().required().trim()
    })
};

module.exports = {
    createOwner,
    getOwnerList,
    updateDetails,
    getDetails
};

