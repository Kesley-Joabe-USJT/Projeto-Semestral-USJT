const jwt =  require("jsonwebtoken")

const createUserToken = async(user, req, res) => {

    const token = jwt.sign({
        name: user.name,
        id: user._id
    }, 'nossosecret')

    // return token
    res.status(200).json({
        message: `Usuário logado: ${user.name}` ,
        token: token,
        userId: user._id
    })

}

module.exports = createUserToken