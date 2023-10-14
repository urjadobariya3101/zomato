const { Admin } = require("../modules");

/**create admin */
const createAdmin = async(reqBody) => {
    return Admin.create(reqBody);
}

/**list of admin */
const getAdminList = async() => {
    return Admin.find().populate("admin");
}

/**get admin by id */
const getAdminById = async(adminId) => {
    return Admin.findById(adminId);
}

/**update admin */
const updateDetails = async(adminId) => {
    return Admin.findByIdAndUpdate(adminId);
}

/**delete admin */
const deleteDetails = async(adminId) => {
    return Admin.findByIdAndDelete(adminId);
}

module.exports = {
    createAdmin,
    getAdminList,
    getAdminById,
    updateDetails,
    deleteDetails
}