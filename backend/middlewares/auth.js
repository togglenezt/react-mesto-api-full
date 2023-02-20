const jwt = require('jsonwebtoken');
const AuthErr = require('../errors/AuthErr');

const { JWT_SECRET } = process.env;

// eslint-disable-next-line consistent-return
module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  const JWT = req.cookies.jwt;
  if (!authorization || !authorization.startsWith('Bearer ')) {
    if(!JWT){
      throw new AuthErr('Необходима авторизация');
    }
  }
  const token = authorization.replace('Bearer ', '');
  let payload;
  try {
    payload = jwt.verify(token, JWT_SECRET);
  } catch (err) {
    return next(new AuthErr('Необходима авторизация'));
  }
  req.user = payload;
  next();
};
