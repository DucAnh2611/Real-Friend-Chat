const { createGroup, updateGroup, getGroup } = require("../routes/Model/GroupModel");
const { send } = require("../routes/Model/MessageModel");

function SetupSocket(io) {

    io.on('connection', (socket) => {
        console.log(`a user connected with socket: ${socket.id}`);

        socket.on("create-group", (data) => {
            let { userid, listUserId, name, avatar} = data;

            createGroup(userid, {listUserId, name, avatar}).then(res => {
                if(res) io.to(groupid).emit("create-success", {groupid: res});
                else socket.emit("create-fail", {message: "Failed to create new group"}); 
            });
        });

        socket.on("send-message", (data) => {
            let {user_id, groupid, content, type} = data;

            send(user_id, {groupid, content, type}).then((res) => {
                if(res) io.to(groupid).emit({content, type});
                else socket.emit("send-message-fail", {message: `Failed to send message to group ${groupid}` })
            });

        });

        socket.on("seen", (data) => {
            let {user_id, groupid} = data;
            
        })

    });
    
}

module.exports = SetupSocket;