const { Schema, default: mongoose } = require("mongoose");

const userSchema = new Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    number: { type: String, required: true, unique: true },
    active: { type: Boolean, default: true }
})
const user = mongoose.model('Users', userSchema);
module.exports = user;