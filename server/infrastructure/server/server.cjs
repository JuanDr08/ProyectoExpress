// Configuración y puesta en marcha del servidor Express.
const express = require('express');
const indexRouter = require('../../aplication/routes/indexRouter.cjs');
const http = require("http")

const { jsonParseErrorHandler } = require('../middlewares/errorHandling.cjs');
const { limiTotal } = require('../middlewares/rateLimit.cjs');

//montando socket.io
const { Server } = require("socket.io")

const createServer = () => {
    const app = express();
    
    const server = http.createServer(app)
    const io = new Server(server)
    
    app.use(jsonParseErrorHandler);    
    app.use(limiTotal);
  
    app.use('/', indexRouter);

    // Socket.io config

    io.on("connection", (socket) => {
        console.log("un usuario se ha conectado")
    })

    return app;
};



module.exports = createServer;