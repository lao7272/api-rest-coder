import { Server } from "socket.io";
import ServiceFactory from "../services/index.service.js";
const { ChatService } = await new ServiceFactory().getServices();
const chatSocket = (server) => {
    const io = new Server(server);
    io.on('connection', async (socket) => {
        console.log(`Socket connected. Socket id: ${socket.id}`)
        const chatDB = await ChatService.getMessagesDB();
        socket.emit('conversation', chatDB);

        socket.on('new-message', async (data) => {
            await ChatService.createMessageDB(data);
            const newChatDB = await ChatService.getMessagesDB();
            socket.emit('conversation', newChatDB);
        });
        

    });
}

export default chatSocket;