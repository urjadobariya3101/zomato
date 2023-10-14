const { userService } = require("../services");

/**create user */
const createUser = async (req, res) => {
  try {
    const reqBody = req.body;

    const user = await userService.createUser(reqBody);
    if (!user) {
      throw new Error("Something went wrong , please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "User create successfully!",
      data: { user },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/**get user list */
const getUserList = async (req, res) => {
  try {
    const { search, ...options } = req.query;

    const getList = await userService.getUserList( options);

    res.status(200).json({
      success: true,
      message: "Get user list successfully!!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/**delete user */
const deleteDetails = async (req, res) => {
  try {
    const userId = req.params.userId;
    const userExists = await userService.getUserById(userId);
    if (!userExists) {
      throw new Error("User not found!");
    }

    await userService.deleteDetails(userId);
    res.status(200).json({
      success: true,
      message: "User delete successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/**update user */
const updateDetails = async (req, res) => {
  try {
    const userId = req.parmas.userId;
    const userExists = await userService.getUserById(userId);
    if (!userExists) {
      throw new Error("User not found!");
    }

    await userService.updateDetails(userId, req.body);

      res.status(200).json({
        success: true,
        message: "user update successfully!",
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
  }
};

/**get user details */
const getUserDetails = async (req, res) => {
  try {
    const getDetails = await userService.getUserById(req.params.userId);
    if (!getDetails) {
      throw new Error("User not found!");
    }

    res.status(200).json({
      success: true,
      message: "user details get successfully!",
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
    createUser,
    getUserList,
    getUserDetails,
    deleteDetails,
    updateDetails
};
