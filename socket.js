// WAYYYY TOOO MANY console logs everywhere, please don't leave so many console.log spam in your apps.
// So many console logs make it very messy to debug as there is spam you need to filter through constantly
// Use console.logs during development of a single feature but then remove these after you are done with testing it
const addUser = (socket, users) => {
    socket.on("add_user", (userId) => {
        users[userId] = socket;
    });
}

const joinChatRoom = (socket, chatroomClients) => {
    // the first line of comments here won't mean much to me as I am on the backend and a BE does not know what a click on the conversation is.
    // the second line can be shortened
    
    // to allow user to join chatroom when they click on conversation
    // chatroom connection between 2 users
    socket.on("join_chatroom", (chatroomId) => {
        socket.join(chatroomId);
        if (!chatroomClients.has(chatroomId)) {
        chatroomClients.set(chatroomId, new Set());
        }
        chatroomClients.get(chatroomId).add(socket.id);
    });
}

const sendMessage = (socket, User, Chatroom, Message) => {
    socket.on("send_message", async (data) => {
        try {
            // const authorUser = await User.findOne({
            // where: {
            //     email_address: data.sender,
            // },
            // });

            // this should be called room, not roomId as it is a Chatroom not an ID
            // const roomId = await Chatroom.findOne({
            // where: {
            //     room: data.room,
            // },
            // });

            // same result, but only one database query
            const room = await Chatroom.findOne({
                where: {
                    room: data.room
                },
                include: [{ model: User, where: { email_address: data.sender }}]
            })

            let newMessage = await Message.create({
                message: data.message,
                author_user_id: room.User.id,
                chatroom_id: room.id,
                time: data.time,
            });

        } catch (error) {
            console.log("ERROR", error);
        }
        io.in(data.room).emit("receive_message", data);
    });
}

const disconnect = (socket, users, chatroomClients) => {
    socket.on("disconnect", () => {
        // this seems unnecessary
        // const userId = Object.keys(users).find((key) => users[key] === socket);
        // delete users[userId];
        delete users[socket] // since you use socket to determine the userID, why not just pass it directly?
        for (const [chatroomId, clients] of chatroomClients.entries()) {
        if (clients.has(socket.id)) {
            clients.delete(socket.id);
            if (clients.size === 0) {
                chatroomClients.delete(chatroomId);
            }
        }
        }
    });
}

const createRoom = (socket, User, Chatroom, Message, Chatroom_User) => {
    socket.on("create_room", async (data) => {
        // I feel the naming here is not good. What is the difference between email and email_address?
        // maybe rather name it creatorEmail and recipientEmail ?
        const { room, email, email_address } = data;
        socket.join(room);
        // Query for creator's and recipient's email
        const creatorUser = await User.findOne({
            where: {
                // destructure on top to get the email instead of using data.email and data.email_address
                email_address: email,
            },
        });
        const recipientUser = await User.findOne({
            where: {
                email_address: email_address,
            },
            // since you only need the id below, we can reduce our dataload by specifying attributes we want
            // this will then run SELECT id FROM Users, instead of SELECT * FROM Users in SQL
            attributes: ["id"],
        });

        // const existingRoom = await Chatroom.findOne({
        // include: [
        //     {
        //     model: user,
        //     where: {
        //         id: creatorUser.id,
        //     },
        //     },
        //     {
        //     model: user,
        //     where: {
        //         id: recipientUser.id,
        //     },
        //     },
        // ],
        // });

        // the 2 user queries above are redundant if we query for the chatroom like so:
        const existingRoom = await Chatroom.findOne({
            include: [
                {
                    model: User,
                    where: {
                        email_address: email,
                    },
                    // I think we would need an alias here?
                    as: "Creator"
                },
                {
                    model: User,
                    where: {
                        email_address: email_address,
                    },
                    as: "Recipient"
                }
            ]
        })


        if (existingRoom) return existingRoom;

        // since this is a new room should use create and not findOrCreate, otherwise our code above is redundant
        const newRoom = await Chatroom.findOrCreate({
            where: {
                room,
            },
        });
        // To get the id of the room in Chatroom.
        // Without this, I can only get the name of the room
        // this makes no sense, newRoom.id should give you the created room id
        // const roomId = await Chatroom.findOne({
        // where: {
        //     room,
        // },
        // });

        // Create 2 entries in the chatroom_user table
        // const chatroomUsersCreator = await Chatroom_User.findOrCreate({
        // where: {
        //     userId: creatorUser.id,
        //     chatroomId: roomId.id,
        // },
        // });
        // const chatroomUsersRecipient = await Chatroom_User.findOrCreate({
        // where: {
        //     userId: recipientUser.id,
        //     chatroomId: roomId.id,
        // },
        // });

        // for multiple creates we can use bulkCreate. Since we create a new room, this should be also creates and not findOrCreate.
        // Due to above refactor we don't have creatorUser and recipientUser anymore, so would need to rethink the way we handle this here. Possibly query it here then, but the above query got optimized to check for an existingRoom.
        await Chatroom_User.bulkCreate([
            {
                userId: creatorUser.id,
                chatroomId: newRoom.id,
            },
            {
                userId: recipientUser.id,
                chatroomId: newRoom.id
            }
        ])

        socket.emit("chatroom_name", room);
    });
}

// models in capital letter always, as these represent classes. Classes always capital letter
const initSocket = (User, Chatroom, Message) => {
    let users = [];
    const chatroomClients = new Map();
    // this looks way cleaner, doesn't it?
    io.on("connection", (socket) => {
        addUser(socket, users)
        joinChatRoom(socket, chatroomClients)
        createRoom(socket, User, Chatroom, Message, Chatroom_User)
        sendMessage(socket, User, Chatroom, Message)
        disconnect(socket, users, chatroomClients)
    });

}

module.exports = initSocket;