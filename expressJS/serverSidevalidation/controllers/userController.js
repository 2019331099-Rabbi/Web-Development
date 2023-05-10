const path = require('path');

const registerPage = (req, res) => {
    res.sendFile(path.join(__dirname + "/../index.html"));
};

const registerUser = async (req, res) => {
    try {
        let { name, email, password } = req.body;
        let newUser = { name, email, password };
        res.json({ name, email, password });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Something went wrong" });
    }
};

const loginUser = (req, res) => {
    try {
        let { email, password } = req.body;
        let newUser = { email, password };
        res.json({ email, password });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Something went wrong" });
    }
};

module.exports = {registerPage, registerUser, loginUser};