require("dotenv").config();
require("colors");

const PORT = process.env.PORT ? Number(process.env.PORT) : 3001;

const BCRYPT_WORK_FACTOR = process.env.BCRYPT_WORK_FACTOR;

const SECRET_KEY = process.env.SECRET_KEY;

console.log("Hearing Health App API config".red);
console.log("PORT:".blue, PORT);
console.log("-----");

module.exports = {
  PORT,
  BCRYPT_WORK_FACTOR,
  SECRET_KEY,
};
