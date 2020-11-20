const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

server.listen(3000, function() {
    console.log('소켓 서버 실행(Port : 3000)');
})
