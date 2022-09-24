const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/category.controller');


router.route('/')
    .get(categoryController.getCategories)
    .post(categoryController.createCategory);

router.route('/:id')
    .get(categoryController.getCategoryById)
    .patch(categoryController.updateCategory)


module.exports = router;