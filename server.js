const express = require('express');
const app = express();

const server = require('http').createServer(app);
const io = require('socket.io')(server);

server.listen(4000, () => {
    console.log('소켓 서버 실행(Port : 4000)');
})

io.on('connection', socket => {
    console.log("연결된 socketID : ", socket.id);

    // socket.on('welcome', ()=>{
    //     console.log("aa");
    //     socket.broadcast.emit('receive chat', {type: "alert", chat: "누군가가 입장하였습니다.", regDate: Date.now()});
    // })
    io.emit('welcome', {aa:"aaa"})
})