const productService = require("../services/product.service");


exports.getProducts = async (req, res, next) => {
    try {
        let filters = { ...req.query };

        const excludeFields = ['sort', 'page', 'limit']
        excludeFields.forEach(field => delete filters[field])

        let filtersString = JSON.stringify(filters)
        filtersString = filtersString.replace(/\b(gt|gte|lt|lte)\b/g, match => `$${match}`)

        filters = JSON.parse(filtersString)

        const queries = {}

        if (req.query.sort) {
            const sortBy = req.query.sort.split(',').join(' ')
            queries.sortBy = sortBy
            console.log(sortBy);
        }
        if (req.query.fields) {
            const fields = req.query.fields.split(',').join(' ')
            queries.fields = fields
            console.log(fields);
        }
        if (req.query.page) {
            const { page = 1, limit = 10 } = req.query;
            const skip = (page - 1) * parseInt(limit);
            queries.skip = skip;
            queries.limit = parseInt(limit);
        }

        const products = await productService.getProductsService(filters, queries);

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
};

exports.createProduct = async (req, res, next) => {
    try {
        const result = await productService.createProductService(req.body);

        res.status(200).json({
            status: "success",
            message: "Data inserted successfully!",
            data: result,
        });
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: "can't get the data",
            error: error.message,
        });
    }
};

exports.updateProductById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await productService.updateProductByIdService(id, req.body);

        res.status(200).json({
            status: "success",
            message: "Successfully updated the product"
        })
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: "Couldn't update the product",
            error: error.message,
        });
    }
};

exports.bulkUpdateProduct = async (req, res, next) => {
    try {
        console.log(req.body)
        const result = await productService.bulkUpdateProductService(req.body);

        res.status(200).json({
            status: "success",
            message: "Successfully updated the product",
        });
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: "Couldn't update the product",
            error: error.message,
        });
    }
};

exports.deleteProductById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await productService.deleteProductByIdService(id);

        if (!result.deletedCount) {
            return res.status(400).json({
                status: "failed",
                error: "Couldn't delete the product"
            })
        }

        res.status(200).json({
            status: "success",
            message: "Successfully deleted the product",
        });
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: "Couldn't delete the product",
            error: error.message,
        });
    }
};

exports.bulkDeleteProduct = async (req, res, next) => {
    try {
        const result = await productService.bulkDeleteProductService(req.body.ids);

        res.status(200).json({
            status: "success",
            message: "Successfully deleted the given products",
        });
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: "Couldn't delete the given products",
            error: error.message,
        });
    }
};