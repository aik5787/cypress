let names = ["Sergii", "Carlos", "Mary", "Anna", "Gleb"];

// function selectedName(arr) {
//   let selectedNames = [];
//   for (let i = 0; i < arr.length; i++) {
//     let name = arr[i];
//     if (!name.includes("a")) selectedNames.push(name);
//   }

//   return selectedNames;
// }

function selectedName(arr) {
  let selectedNames = [];

  arr.forEach((name) => {
    if (!name.includes("a")) selectedNames.push(name);
  });
  return selectedNames;
}


// function selectedName (arr) {

//     return arr.filter(name => !name.includes('a'))
// }

console.log(selectedName(names));
