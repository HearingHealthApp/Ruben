const convertSnakeToCamel = (snakeObj) => {
  const camelObj = {};

  for (const key in snakeObj) {
    if (Object.prototype.hasOwnProperty.call(snakeObj, key)) {
      const camelKey = key.replace(/_(\w)/g, (_, letter) =>
        letter.toUpperCase()
      );
      camelObj[camelKey] = snakeObj[key];
    }
  }

  return camelObj;
};

module.exports = convertSnakeToCamel;