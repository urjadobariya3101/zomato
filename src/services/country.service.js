const { Country } = require("../modules");

/** create country*/
const createCountry = async (reqBody) => {
  return Country.create(reqBody);
};

/**list of country  */
const getCountryList = async () => {
  return Country.find();
};

module.exports = {
  createCountry,
  getCountryList,
};
