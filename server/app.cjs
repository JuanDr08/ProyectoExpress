const https = require('https');
const fs = require('fs');
const path = require('path');
const ConnectToDatabase = require('./infrastructure/database/database.cjs');
const createServer = require('./infrastructure/server/server.cjs');


const startApp = async () => {
    let connectToDatabase = new ConnectToDatabase();
    await connectToDatabase.connectOpen();
    const app = createServer();
    
    
    /* const httpsServer = https.createServer({
        key: fs.readFileSync(path.join(__dirname, '/infrastructure/ssl/private.key')),
        cert: fs.readFileSync(path.join(__dirname, '/infrastructure/ssl/certificate.crt'))
    }, app); */

    app.use((req, res) => res.status(404).json({message: "No tiene autorizacion"}))

    app.listen(3000, () => {
        console.log(`http://${process.env.EXPRESS_HOST}:${process.env.EXPRESS_PORT}`);
    });
};

startApp();