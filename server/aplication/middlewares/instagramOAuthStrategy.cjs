const InstagramStrategy = require('passport-instagram').Strategy;

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

    passport.use(new InstagramStrategy({
        clientID: process.env.INSTAGRAM_CLIENT_ID,
        clientSecret: process.env.INSTAGRAM_CLIENT_SECRET,
        callbackURL: "https://localhost:3000/login/auth/instagram/callback"
        },
        (accessToken, refreshToken, profile, cb) => {
            console.log(profile)
            return cb(null, profile)
        }
    ))
    

}