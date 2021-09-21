const cors = require('cors');
const express = require('express');
// const io = require('socket.io')();
const http = require('http');

const { add_user, remove_user, get_user } = require('./users.js');

const PORT = process.env.PORT || 5000;

const router = require('./router');

const app = express();
const server = http.createServer(app);

const io = require('socket.io')(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

//io.attach(server);

io.on('connection', (socket) => {
    //console.log('a user connected!');

    socket.on('join', ({name,room}, callback) => {
        //console.log(name,room);
        const {error, user} = add_user({id: socket.id, name, room});

        if(error) {
            return callback(error);
        }

        socket.emit('message', {user:'admin', text:`${user.name}, welcome to the room ${user.room}`});

        // to all connected clients except the sender
        socket.broadcast.to(user.room).emit('message', {user:'admin', text:`${user.name} has joined!`});
        
        socket.join(user.room);

        //'callback()' returns something back on server 
        callback();
    });

    socket.on('sendMessage', (message, callback) => {
        const user = get_user(socket.id);

        //the message is sending to the all server or room
        io.to(user.room).emit('message', {user: user.name, text: message});

        callback();
    });

    socket.on('disconnect', () => {
        //console.log('user disconnected');

        const user = remove_user(socket.id);

        if(user) {
            io.to(user.room).emit('message', {user: 'admin', text: `${user.name} has left.`});
        }
    });
});

//app.use(cors({origin: '*'}));
app.use(router);
app.use(cors());

server.listen(PORT, () => console.log(`Server is on port ${PORT}`));

