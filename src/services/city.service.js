const { City } = require("../modules");

/** create city*/
const createCity = async (reqBody) => {
  return City.create(reqBody);
};

/**list of city  */
const getCityList = async () => {
  return City.find().populate("country").populate("state");
};

module.exports = {
  createCity,
  getCityList,
};
