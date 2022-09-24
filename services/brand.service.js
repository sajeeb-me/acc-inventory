const Brand = require("../models/Brand")


exports.getBrandsService = async () => {
    const brands = await Brand.find({});
    return brands;
}