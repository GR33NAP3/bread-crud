const mongoose = require('mongoose')

const bakerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        enum: ['Rachel','Ross', 'Joey', 'Monica','Chandler', 'Phoebe']
    },
    startDate: {
        type: Date,
        required: true
    },
    bio: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model('baker',bakerSchema)