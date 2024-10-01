const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/auth/check', (req, res) => {
    if (req.isAuthenticated()) {
        return res.status(200).json({ authenticated: true, user: req.user, details: 'Usuario logueado' });
    } else {
        return res.status(401).json({ authenticated: false, user: null, details: 'No se encuentra logueado' });
    }
});

router.get('/prueba', async (req, res, next) => {

    let data = {
        "nick": "Pepito",
        "password": "123456",
        "email": "juan@gmail.com"
    }
    console.log('sadasda')
    console.log(data)

    let fet = await fetch('http://localhost:3000/register/auth/ruraqMaki', {headers: {'Content-Type': 'application/json'},method:'POST',body: JSON.stringify(data)})
    console.log(fet)
    res.status(200).json({data: fet})

})

module.exports = router;