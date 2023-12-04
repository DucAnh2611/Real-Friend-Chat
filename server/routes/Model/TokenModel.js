const jwt = require("jsonwebtoken");

const newToken = (bindData, key, time = '24h') => {
    return jwt.sign(bindData, key, time);
}

module.exports = {
    newToken: newToken
}