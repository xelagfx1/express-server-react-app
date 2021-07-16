const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const s_keys = require('../config/keys');
const mongoose_p = require('mongoose');

const User = mongoose_p.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(new GoogleStrategy({
    clientID: s_keys.googleClientID || process.env.GOOGLE_CLIENT_ID,
    clientSecret:  s_keys.googleClientSecret || process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: s_keys.callbackURL || process.env.CALLBACK_URL
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOne({ googleId: profile.id }).then((existingUser) => {
      if(existingUser) {
        done(null, existingUser);
      } else {
        new User({ 
          googleId: profile.id,
          name: profile.fullName,
          email: profile.email
        })
        .save()
        .then(user => done(null, user));
      }
    })

    // console.log('profile:' + JSON.stringify(profile));
    // console.log('accessToken:' + accessToken);
    // console.log('cb:' + cb);

  }
));