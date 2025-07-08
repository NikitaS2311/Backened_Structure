const express = require('express');
const {ServerConfig,Logger } = require('./config');
//const{AboutController, HomeController} = require('./controllers');
const app = express();
const apiRoutes = require('./routes')

app.use('/api', apiRoutes);
app.listen(ServerConfig.PORT, ()=>{
    console.log(`Sucessfully started the server on PORT : ${ServerConfig.PORT}`);
    Logger.info("Successfully started the server", {});
});
 
