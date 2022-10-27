const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserAccountSchema = new Schema({
    profile_name: String,
    email: String,
    password: String
});

const UserAccount = mongoose.model('UserAccounts', UserAccountSchema);

module.exports = UserAccount;