const categoryService = require("../services/category.service");


exports.getCategories = async (req, res, next) => {
    try {
        const categories = await categoryService.getCategoriesService();

        res.status(200).json({
            status: "success",
            message: "Successfully get all categories",
            data: categories
        })
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: "Can't get the categories",
            error: error.message,
        });
    }
}

exports.createCategory = async (req, res, next) => {
    try {
        const result = await categoryService.createCategoryService(req.body);

        res.status(200).json({
            status: "success",
            message: "Successfully created the category"
        })
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: "Can't create the category",
            error: error.message,
        });
    }
}

exports.getCategoryById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const category = await categoryService.getCategoryByIdService(id);

        if (!category) {
            res.status(400).json({
                status: "failed",
                message: "Can't get the category with this id."
            })
        } else {
            res.status(200).json({
                status: "success",
                message: "Successfully get the category",
                data: category,
            })
        }

    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: "Can't get the category",
            error: error.message,
        });
    }
}

exports.updateCategory = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await categoryService.updateCategoryService(id, req.body);

        if (!result.modifiedCount) {
            res.status(400).json({
                status: "failed",
                message: "Can't update the category with this id."
            })
        } else {
            res.status(200).json({
                status: "success",
                message: "Successfully updated the category",
                data: result,
            })
        }

    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: "Can't update the category",
            error: error.message,
        });
    }
}