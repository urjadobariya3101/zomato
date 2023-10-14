const Joi = require("joi");

/**create admin */
const createAdmin = {
    body : Joi.object().keys({
        user : Joi.string().required().trim(),
        role : Joi.string().required().trim(),
        permission : Joi.string().required().trim()
    })
}

/**list of admin */
const getAdminList = {
    query : Joi.object().keys()
}

/**get admin list by id */
const getAdminById = {
    params : Joi.object().keys({
        adminId : Joi.string().required().trim()
    })
}

/**update Details */
const updateDetails = {
    params : Joi.object().keys({
        adminId : Joi.string().required().trim()
    }),
    body : Joi.object().keys({
        user : Joi.string().required().trim(),
        role : Joi.string().required().trim(),
        permission : Joi.string().required().trim()
    })
}

module.exports = {
    createAdmin,
    getAdminList,
    getAdminById,
    updateDetails
}
