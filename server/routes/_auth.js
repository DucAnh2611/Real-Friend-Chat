const jwt = require("jsonwebtoken");
require('dotenv').config();

const config = process.env;

const verifyToken = (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token, config.TOKEN_KEY);
    if(parseInt(new Date().getTime()/1000 - decoded.exp) > 0 ) return res.status(401).send("Token expired");
    else {req.user = decoded}

  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

module.exports = verifyToken;