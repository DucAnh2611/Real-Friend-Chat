const jwt = require("jsonwebtoken");

const newToken = async (bindData, key, time = '24h') => {
    return jwt.sign(bindData, key, time);
}

module.exports = {
    newToken: newToken
}