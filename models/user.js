const mongoose = require('mongoose'),
    Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
    name: String,
    username: String,
    email: String,
    password: String,
    isAdmin: Boolean
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);
