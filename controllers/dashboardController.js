const jwt = require('jsonwebtoken');

function dashboardController(req, res) {
    try {
        const token = req.header('access_token');
        if (token) {
            const verify = jwt.verify(token, 'KEYBOARD-CAT');
            if (verify) {
                return res.send("Sucessfully verified")
            }
        }
        else{
            return res.send("Please Provide a token")
        }
    } catch (err) {
        return  res.send("Get Lost..! You fake user!!");
    }
}

module.exports = { dashboardController }