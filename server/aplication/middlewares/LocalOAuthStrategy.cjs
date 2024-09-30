const LocalStrategy = require('passport-local').Strategy;
const User = require('../../domain/models/userModel.cjs');

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

    passport.use('local', new LocalStrategy({passReqToCallback: true},
        async (req, username, password, done) => {
            //return done(null, {username, password})

            try {
                let userInstance = new User();
                let dataUser = [
                    {
                    $match: {
                      $or: [
                        {nick: username},
                        {phone: username},
                        {email: username}
                      ]
                    }
                  }
                  ];
          
                let resAgregate = await userInstance.userAggregate(dataUser)
          
                if(resAgregate.length) return done(null, resAgregate, true);
                req.notLoggued = true
                done(null, 'si', false);
              } catch (error) {
                console.error('Error saving/updating user:', error);
                done(error, null);
              }
        }
    ));
}