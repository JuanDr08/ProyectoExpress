const express = require('express');
const path = require('path');

const router = express.Router();

const currentDirectory = process.cwd();
router.get("/", (req, res)=>{
    res.sendFile(path.join(currentDirectory, 'index.html'));
})


module.exports = router;