const express = require('express');
const path = require('path');

const router = express.Router();


router.get('/', (req, res) => res.status(200).json({user: req.user}) )

router.get('/auth/check', (req, res) => {
    if (req.isAuthenticated()) {
        return res.status(200).json({ authenticated: true, user: req.user, details: 'Usuario logueado' });
    } else {
        return res.status(401).json({ authenticated: false, user: null, details: 'No se encuentra logueado' });
    }
});

module.exports = router;