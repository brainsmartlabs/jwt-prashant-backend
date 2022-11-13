const { User } = require("../models/User");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

function getHello(req, res) {
    res.send('Hello World')
}

async function registerController(req, res) {
    let { name, email, password } = req.body;

    let exisitingUser;
    try {
        exisitingUser = await User.findOne({ 'email': email });
    } catch (err) { console.log(err) }

    if (exisitingUser) {
        return res.status(400).json({ message: 'User Already Exisits' });
    }

    let hashedPassword = bcrypt.hashSync(password, 5);
    console.log(hashedPassword);
    let user = new User({
        name,
        email,
        'password': hashedPassword
    });
    try {
        exisitingUser = await user.save();
    } catch (err) { console.log(err) }

    return res.status(200).json({ message: 'New user Created', exisitingUser });
}


async function loginController(req, res) {
    let { email, password } = req.body;

    let exisitingUser;
    try {
        exisitingUser = await User.findOne({ 'email': email });
    } catch (err) { console.log(err) }

    if (!exisitingUser) {
        return res.status(400).json({ message: 'User Email Does not Exisit' });
    }

    let isMatched = false;
    isMatched = bcrypt.compareSync(password, exisitingUser.password);

    if (!isMatched) {
        return res.status(400).json({ message: 'Password Did not Match' })
    }

    const token = jwt.sign({ 'email': email }, 'KEYBOARD-CAT');
    console.log();

    return res.status(200).cookie('access_token', token).json({ message: 'Login Sucssfull' });
}

module.exports = { getHello, registerController, loginController }