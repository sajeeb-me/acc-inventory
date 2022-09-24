const Category = require("../models/Category")


exports.getCategoriesService = async () => {
    const categories = await Category.find({});
    return categories;
}

exports.createCategoryService = async (data) => {
    const result = await Category.create(data);
    return result;
}

exports.getCategoryByIdService = async (categoryId) => {
    const category = await Category.findOne({ _id: categoryId });
    return category;
}

exports.updateCategoryService = async (categoryId, data) => {
    const result = await Category.updateOne({ _id: categoryId }, data, {
        runValidators: true
    });
    return result;
}