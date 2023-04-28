require('dotenv').config();

const server= require('./server');

const PORT = process.env.PORT || 3330;

server.listen(PORT, ()=> console.log(`Server encendido en puerto: ${PORT}`));