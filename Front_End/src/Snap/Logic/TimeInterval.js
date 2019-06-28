const isMatch = (array) => {
  const comparison = array.splice(0,2);
  if (comparison[0] === comparison[1]) {
    return true;
  } else {
    return false;
  };
};

module.exports = isMatch;
