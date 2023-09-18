// const names = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Liviu'}];

// function extractValue(arr, key) {
//   return arr.reduce(function(extract, currentVal) {
//       extract.push(currentVal[key]);
//       return extract;
//    }, []);
// }

// function vowelCount(str) {
//    const vowels = "aeiou";
//    return str.split('').reduce(function(acc, next) {
//       let lower = next.toLowerCase()
//       if(vowels.indexOf(lower) !== -1) {
//          if(acc[lower]) {
//             acc[lower]++;
//          } else {
//             acc[lower] = 1;
//          }
//       }
//       return acc;
//    }, {});
// }

// function addKeyAndValue(arr, key, value){
//    return arr.reduce(function(acc, next, idx){
//       acc[idx][key] = value;
//       return acc;
//    }, arr);
// }

function partition(arr, cb){
   return arr.reduce(function(acc, next){
      if(cb(next)){
         acc[0].push(next);
      } else {
         acc[1].push(next);
      }
      return acc;
   }, [[], []]);
}

