
const renderChat = (req, res) => {
    res.render("pages/index.ejs")
}

const getUserChat = (req, res) => {
    const email = req.params.email
    res.render("pages/chatEmail.ejs", email);
}

export {
    renderChat,
    getUserChat
}