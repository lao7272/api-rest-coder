import ServiceFactory from "../services/index.service.js";
const { ChatService } = await new ServiceFactory().getServices();
const renderChat = (req, res) => {
    res.render("pages/index.ejs")
}

const getUserChat = async (req, res) => {
    const chats = await ChatService.getMessagesByEmailDB(req.params.email);
    console.log(chats)
    res.render("pages/chatEmail.ejs", {chats});
}

export {
    renderChat,
    getUserChat
}