const jwt = require('jsonwebtoken');

const generateJWT = (id, email) => {
  return jwt.sign({ id, email }, process.env.SECRET_KEY, {
    expiresIn: '24h',
  });
};
module.exports = generateJWT;
