const { User } = require("../models");

const createAccount = (async (req, res) => {
    const { name, email, username, password } = req.body;

    try {
        const userData = await User.findAll({ where: { username: username } });
        if (userData.length === 0) {
            const user = await User.create({ name, email, username, password });
            return res.status(200).json({ message: 'Account Created Successfully', user })
        }
        else {
            return res.status(500).json({ message: 'User already exists' });
        }
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Invalid Username or Password' })
    }
});

const login = (async (req, res) => {
    const { username, password } = req.body;

    try {
        const userData = await User.findAll({ where: { username: username, password: password } });
        if (userData.length > 0) {
            return res.status(200).json({ message: 'Logged In', userData })
        }
        else {
            res.status(500).json({ message: 'Invalid Username or Password' })
        }
    }
    catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})

module.exports = {
    createAccount,
    login
}