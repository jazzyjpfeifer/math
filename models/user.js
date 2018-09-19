const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    username: String,
    email: String,
    password: String,
    isAdmin: Boolean
});

module.exports = mongoose.model("User", userSchema);
