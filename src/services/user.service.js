const { User } = require("../modules");

/**create user */
const createUser = async(reqBody) => {
    return User.create(reqBody);
};

/**get list of user */
const getUserList = async() => {
    return User.find();
};

/**get list by id */
const getUserById = async(userId) => {
    return User.findById(userId);
};

/**update user */
const updateDetails = async(userId) => {
    return User.findByIdAndUpdate(userId);
};

/**delete user */
const deleteDetails = async(userId) => {
    return User.findByIdAndDelete(userId);
};

module.exports = {
    createUser,
    getUserList,
    getUserById,
    updateDetails,
    deleteDetails
}