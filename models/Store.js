const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const slug = require('slugs');
const storeSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: 'enter store name'
    },
    slug: String,
    description: {
        type: string,
        trim: true
    }
    tags: [String]
});

module.exports = mongoose.model('Store', storeSchema);