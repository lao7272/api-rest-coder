
const isAdmin = (req, res, next) => {
    if(req.body.admin){
        next();
    } else {
        res.json({message: 'No eres administrador'});
    }
}

export default isAdmin;