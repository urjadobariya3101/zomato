const { ownerService } = require("../services");

/**create owner */
const createOwner = async (req, res) => {
  try {
    const reqBody = req.body;

    const owner = await ownerService.createOwner(reqBody);
    if (!owner) {
      throw new Error("Something went wrong, Please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "Owner create successfully!",
      data: { owner },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/**get owner list */
const getOwnerList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [];
    }

    const getList = await ownerService.getOwnerList(filter, options);

    res.status(200).json({
      success: true,
      message: "Get owner list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/**delete owner */
const deleteDetails = async (req, res) => {
  try {
    const ownerId = req.params.ownerId;
    const ownerExists = await ownerService.getOwnerById(ownerId);
    if (!ownerExists) {
      throw new Error("Owner not found!");
    }

    await ownerService.deleteDetails(ownerId);
    res.status(200).json({
      success: true,
      message: "Delete data successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/**owner by id */
const updateDetails = async (req, res) => {
  try {
    const ownerId = req.params.ownerId;
    const ownerExists = await ownerService.getOwnerById(ownerId);
    if (!ownerExists) {
      throw new Error("Owner not found!");
    }

    await ownerService.updateDetails(ownerId, req.body);

    res.status(200).json({
      success: true,
      message: "Owner update successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/**get owner details by id */
const getOwnerDetails = async (req, res) => {
  try {
    const getDetails = await ownerService.getOwnerById(req.params.ownerId);
    if (!getDetails) {
      throw new Error("Owner not found");
    }

    res.status(200).json({
      success: true,
      message: "Owner details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createOwner,
  getOwnerList,
  deleteDetails,
  updateDetails,
  getOwnerDetails
};