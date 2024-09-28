const DiscordStrategy = require('passport-discord').Strategy;

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

    passport.use(new DiscordStrategy({
        clientID: process.env.DISCORD_CLIENT_ID,
        clientSecret: process.env.DISCORD_CLIENT_SECRET,
        callbackURL: "https://localhost:3000/login/auth/discord/callback",
        scope: ['identify', 'email']
        },
        (accessToken, refreshToken, profile, cb) => {
            return cb(null, profile)
        }
    ))
    

}