const express = require('express');

const { ServerConfig, Logger } = require('./config');

const apiRoutes = require('./routes');

const app = express();

// console.log(PORT);
app.use('/api',apiRoutes);

app.listen( ServerConfig.PORT, () => {
  console.log(`Example app listening on port ${ServerConfig.PORT}`);
  // Logger.info(`sucessfully started the server`,"root",{});
});