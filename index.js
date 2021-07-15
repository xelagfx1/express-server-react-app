const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport_i = require('passport');

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
require('./models/user');
require('./services/passport');

const app = express();

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [process.env.COOKIE_KEY]
    })
);
app.use(passport_i.initialize());
app.use(passport_i.session());
require('./routes/authRoutes')(app);
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});