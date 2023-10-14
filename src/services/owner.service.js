const { Owner } = require("../modules");

/** create Owner*/
const createOwner = async (reqBody) => {
  return Owner.create(reqBody);
};

/**list of Owner  */
const getOwnerList = async () => {
  return Owner.find().populate("restaurant");
};

/**get restro list */
const getOwnerById = async(ownerId) => {
  return Owner.findById(ownerId);
};

/**delete Owner */
const deleteDetails = async(ownerId) => {
  return Owner.findByIdAndDelete(ownerId);
};

/**update restro */
const updateDetails = async (ownerId) => {
  return Owner.findByIdAndUpdate(ownerId);
};

module.exports = {
  createOwner,
  getOwnerList,
  deleteDetails,
  getOwnerById,
  updateDetails
};
