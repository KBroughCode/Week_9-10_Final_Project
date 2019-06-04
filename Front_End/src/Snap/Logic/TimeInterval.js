
const isMatch = (array) => {

const comparison = array.slice(-2);

if (comparison[0] === comparison[1]) {
   console.log("MATCH!!")
  } else {
   console.log("No Match PUNK!!")
  }
}

module.exports = isMatch;
