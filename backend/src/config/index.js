require('dotenv').config();

const config = {
  PORT: process.env.PORT || 8080,
  DB: process.env.DB_URI,
};

module.exports = config;
