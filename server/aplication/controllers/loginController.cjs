const passport = require('passport');



exports.googleAuthCallback = (req, res, next) => {
    passport.authenticate('google', async (err, user, info) => {

        // Checkeo si la autenticacion fue cancelada o hubo algun error
        if (!user) return res.status(500).json({msg: 'Error en la autenticacion, fallida o cancelada'});
        
        /*
            Importante el metodo logIng que nos ofrece passport dentro del objeto 'Request' Ya que es el que nos permite que si la autenticacion sale bien, guardar la informacion
            del usuario dentro de la session para en posteriores casos poder verificar si hay alguien autenticado y asi sucesivamente
        */
        
        req.logIn(user, (err) => { 
            if (err) {
                console.log(err, 'Error al iniciar sesión ')
                return next(err)
            }
            return res.redirect('/')
        })
    })(req, res, next);
}; 

exports.facebookAuthCallback = (req, res, next) => {

    passport.authenticate('facebook', async (err, user, info) => {
        if (!user) return res.status(500).json({msg: 'Error en la autenticacion, fallida o cancelada'});
        req.logIn(user, (err) => { 
            if (err) {
                console.log(err, 'Error al iniciar sesión ')
                return next(err)
            }
            return res.redirect('/')
        })
    })(req, res, next);

}

exports.discordAuthCallback = (req, res, next) => {

    passport.authenticate('discord', async (err, user, info) => {

        if (!user) return res.status(500).json({msg: 'Error en la autenticacion, fallida o cancelada'});
        req.logIn(user, (err) => { 
            if (err) {
                console.log(err, 'Error al iniciar sesión ')
                return next(err)
            }
            return res.redirect('/')
        })

    })(req, res, next);

}

exports.logOutController = (req, res) => {

    if (!req.isAuthenticated()) return res.status(401).json({msg: 'No hay una sesion activa para desloguear'})

    req.logOut(err => { // Logout permite cerrra la session que habia previamente iniciada, borrando asi algunos datos de inicio de session como usuario etc... pero mantiene
        // algunos datos como preferencias
        if (err) return res.status(500).json({ message: 'Error cerrando la sesión' });

        req.session.destroy(err => { // A diferencia de el logOut, este elimita totalmente los datos de inicio de session, no queda absolutamente nada de datos
            if (err) return res.status(500).json({ message: 'Error eliminando la sesión' });
            res.clearCookie('connect.sid'); // Se limipia la cookie aunque es de poca utilidad ya que al volver a la ruta raiz esta vuelve a generar una cookie
            res.redirect('/login') // Si todo sale bien redireccionamos a la raiz
        })

    })

}