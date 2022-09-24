const storeService = require("../services/store.service");


exports.getStores = async (req, res, next) => {
    try {
        const stores = await storeService.getStoresService();

        res.status(200).json({
            status: "success",
            message: "Successfully get all stores",
            data: stores
        })
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: "Can't get the stores",
            error: error.message,
        });
    }
}

exports.createStore = async (req, res, next) => {
    try {
        const result = await storeService.createStoreService(req.body);

        res.status(200).json({
            status: "success",
            message: "Successfully created the store"
        })
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: "Can't create the store",
            error: error.message,
        });
    }
}

exports.getStoreById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const store = await storeService.getStoreByIdService(id);

        if (!store) {
            res.status(400).json({
                status: "failed",
                message: "Can't get the store with this id."
            })
        } else {
            res.status(200).json({
                status: "success",
                message: "Successfully get the store",
                data: store,
            })
        }

    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: "Can't get the store",
            error: error.message,
        });
    }
}

exports.updateStore = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await storeService.updateStoreService(id, req.body);

        if (!result.modifiedCount) {
            res.status(400).json({
                status: "failed",
                message: "Can't update the store with this id."
            })
        } else {
            res.status(200).json({
                status: "success",
                message: "Successfully updated the store",
                data: result,
            })
        }

    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: "Can't update the store",
            error: error.message,
        });
    }
}