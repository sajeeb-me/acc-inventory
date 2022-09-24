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

exports.createBrand = async (req, res, next) => {
    try {
        const result = await brandsService.createBrandService(req.body);

        res.status(200).json({
            status: "success",
            message: "Successfully created the brand"
        })
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: "Can't create the brand",
            error: error.message,
        });
    }
}

exports.getBrandById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const brand = await brandsService.getBrandByIdService(id);

        if (!brand) {
            res.status(400).json({
                status: "failed",
                message: "Can't get the brand with this id."
            })
        }

        res.status(200).json({
            status: "success",
            message: "Successfully get the brand",
            data: brand,
        })
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: "Can't get the brand",
            error: error.message,
        });
    }
}

exports.updateBrand = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await brandsService.updateBrandService(id, req.body);

        if (!result.modifiedCount) {
            res.status(400).json({
                status: "failed",
                message: "Can't update the brand with this id."
            })
        } else {
            res.status(200).json({
                status: "success",
                message: "Successfully updated the brand",
                data: result,
            })
        }

    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: "Can't update the brand",
            error: error.message,
        });
    }
}