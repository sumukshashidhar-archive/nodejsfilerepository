var mongoose = require("mongoose");

var downloadLogSchema = new mongoose.Schema({
    ip: String,
    dateAndTime: {type: Date, default:Date.now}
})

module.exports = mongoose.model("downloadLog", downloadLogSchema)