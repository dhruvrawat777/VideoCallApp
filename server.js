const express = require('express');
const app = express();
const server=require('http').Server(app);
const { v4: uuidv4 } = require('uuid');
const io=require('socket.io')(server);
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(require('cors')())

app.get('/:room',(req,res,next)=>{
    res.render('room',{roomId:req.params.room});
});


app.get('/', (req, res, next) => {
    res.redirect(`/${uuidv4()}`);
});


io.on('connection',socket=>{
    socket.on('join-room',(roomId)=>{
        //console.log("Joined room");
        socket.join(roomId);
        socket.broadcast.to(roomId).emit('user-connected');
    })
});

server.listen(3000);

