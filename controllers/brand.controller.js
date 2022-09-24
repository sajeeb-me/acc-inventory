const brandsService = require("../services/brand.service");


exports.getBrands = async (req, res, next) => {
    try {
        const brands = await brandsService.getBrandsService();

        res.status(200).json({
            status: "success",
            message: "Successfully get all brands",
            data: brands
        })
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: "Can't get the brands",
            error: error.message,
        });
    }
}