
const isMatch = (array) => {

const comparison = array.splice(0,2);

if (comparison[0] === comparison[1]) {
   console.log("match");
  } else {
   console.log("not a match");
  }
}

module.exports = isMatch;
