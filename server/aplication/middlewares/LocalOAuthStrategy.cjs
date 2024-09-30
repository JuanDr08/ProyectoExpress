const LocalStrategy = require('passport-local').Strategy;

module.exports = (passport, path) => {
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

    passport.use('local', new LocalStrategy(
        async (username, password, done) => {
            console.log(username, password, path);
            return done(null, {username, password})
        }
    ));
}