//const { JWT_SECRET = 'JWT_SECRET' } = process.env;
const { MONGO_URL = 'mongodb://localhost:27017/mestodb' } = process.env;
module.exports = {
  MONGO_URL,
};
