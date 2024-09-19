const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.use((req, res) => res.status(404).json({message: "No tiene autorizacion"}))

const PORT = process.env.EXPRESS_PORT || 3000

app.listen(3000, () => console.log(`http://${process.env.EXPRESS_HOST}:${PORT}`))