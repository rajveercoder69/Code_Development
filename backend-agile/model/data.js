const mongoose = require('mongoose');
const { Schema } = mongoose;

const dataSchema = new Schema({
    user: {

        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    project: {
        type: String,

    },
    input: {
        type: String,

    },
    output: {
        type: String,

    },
    enquiry: {
        type: String,

    },
    fdile: {
        type: String,

    },
    Interface: {
        type: String,

    },
    added: {
        type: String,

    },
    changed: {
        type: String,

    },
    elete: {
        type: String,

    },
    pf_range: {
        type: String,

    },
    devtype: {
        type: String,

    },
    effort: {
        type: String
    },
    maxeffort: {
        type: String
    },
    cost: {
        type: String
    }
});
module.exports = mongoose.model('datain', dataSchema);