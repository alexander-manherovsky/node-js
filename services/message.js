const MessageRepository = require("../repositories/MessageRepository");

module.exports = {
    findAll: callback => {
        MessageRepository.getAll((err, data) => {
            callback(null, data);
        });
    },

    findOne: (id, callback) => {
        MessageRepository.getById(id, (err, data) => {
            callback(err, data);
        });
    },

    store: (body, callback) => {
        MessageRepository.store(body, (err, savedInstance) => {
            callback(err, savedInstance);
        });
    },

    update: (id, body, callback) => {
        MessageRepository.update(id, body, (err, updatedInstance) => {
            callback(err, updatedInstance);
        });
    },

    destroy: (id, callback) => {
        MessageRepository.destroy(id, (err, deletedInstance) => {
            callback(err, deletedInstance);
        });
    },



    findAllSendersAndReceivers: (id, callback) => {
        MessageRepository.getByIdAllSendersAndReseivers(id, (err, data) => {
            callback(err, data);
        });
    }


};
