const cardValue = require('./cardValueLogic');

 const evaluateCards=(cardArray) => {
   let total=[0];
   cardArray.forEach((card) => {
     total.forEach((element,i) => {
       if(card ==='ACE'){
         total[i] = [element+1,element+11];
       }else{
         total[i] += cardValue[card];
       };
     });
     total = total.flat();
   });
   total = removeDuplicates(total);
   total = removeOver21(total);
   return total
 };

 const removeDuplicates=(array) => {
   return [...new Set(array)];
 }

 const removeOver21=(array) => {
   const newArray = []
   array.forEach((element) => {
     if(element<22){
       newArray.push(element)
     }
   })
   return newArray;
 }

module.exports = evaluateCards;
