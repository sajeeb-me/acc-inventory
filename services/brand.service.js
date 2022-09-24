const Brand = require("../models/Brand")


exports.getBrandsService = async () => {
    const brands = await Brand.find({}).select('-products -suppliers');
    return brands;
}

exports.createBrandService = async (data) => {
    const result = await Brand.create(data);
    return result;
}