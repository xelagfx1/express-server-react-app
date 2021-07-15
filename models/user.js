const mongoose_u = require('mongoose');
const Schema = mongoose_u.Schema;

const userSchema = new Schema({
    googleId: String,
    email: String,
    name: String
});

mongoose_u.model('users', userSchema);
