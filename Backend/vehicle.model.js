const mongoose = require('mongoose');
const Schema = mongoose.Schema;


Vehicles = new Schema({
    id: {
        type: String
    },
    type: {
        type: String
    },
    manufacturer: {
        type: String
    },
    year: {
        type: String
    },
    passengers: {
        type: String
    },
    price: {
        type: String
    },
    status: {
        type: String
    }
}, {
    collation: 'vehicles'
});

module.exports = mongoose.model('Vehicles',Vehicles);