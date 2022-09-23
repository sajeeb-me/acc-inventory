const { getProductsService } = require("../services/product.service");


exports.getProducts = async (req, res, next) => {
    try {
        const products = await getProductsService()
        res.status(200).json({
            status: "success",
            message: "Successfully get all products",
            data: products
        })
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: "can't get the data",
            error: error.message,
        });
    }
}