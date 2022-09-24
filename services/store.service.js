const Store = require("../models/Store")


exports.getStoresService = async () => {
    const stores = await Store.find({});
    return stores;
}

exports.createStoreService = async (data) => {
    const result = await Store.create(data);
    return result;
}

exports.getStoreByIdService = async (storeId) => {
    const store = await Store.findOne({ _id: storeId });
    return store;
}

exports.updateStoreService = async (storeId, data) => {
    const result = await Store.updateOne({ _id: storeId }, data, {
        runValidators: true
    });
    return result;
}