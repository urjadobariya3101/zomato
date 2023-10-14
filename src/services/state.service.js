const { State } = require("../modules");

/**create state */
const createState = async (reqbody) => {
    return State.create(reqbody);
}

/**list of state */
const getStateList = async() => {
    return State.find().populate("country");
}

module.exports = {
    createState,
    getStateList
};
