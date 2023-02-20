const { JWT_SECRET = 'dev' } = process.env;
const { MONGO_URL = 'mongodb://localhost:27017/mestodb' } = process.env;
module.exports = {
  JWT_SECRET,
  MONGO_URL,
};
