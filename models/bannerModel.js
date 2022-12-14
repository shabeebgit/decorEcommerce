const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bannerSchema = new Schema({
    bannerMainHeading: String,
    bannerSubHeading: String,
    bannerDescription: String,
    bannerImage: String,
    bannerShowStatus: {
        type: Boolean,
        default: true
    }
})

const Banner = new mongoose.model('Banner', bannerSchema)

module.exports = Banner 