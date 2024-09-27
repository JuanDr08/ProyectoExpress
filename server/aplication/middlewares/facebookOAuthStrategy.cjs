const FacebookStrategy = require('passport-facebook').Strategy;

module.exports = (passport) => {

    passport.serializeUser((user, done) => {
        done(null, user);
    });
    passport.deserializeUser(async (user, done) => {
        try {
            done(null, user);
        } catch (err) {
            done(err, null);
        }
    });

    passport.use(new FacebookStrategy({
        clientID: process.env.FACEBOOK_APP_ID,
        clientSecret: process.env.FACEBOOK_APP_SECRET,
        callbackURL: "http://localhost:3000/login/auth/facebook/callback",
        profileFields: ['id', 'emails', 'name', 'picture.type(large)']
    },
        (accessToken, refreshToken, profile, cb) => {
            return cb(null, profile)
        }
    ))
    

}