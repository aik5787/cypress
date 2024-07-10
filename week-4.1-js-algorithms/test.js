// function saveDuplicates(arr) {
//     let seen = []
//     let dublicates = []

//     // for (let index = 0; index < arr.length; index++) {
//     //     const el = arr[index];
//     //     if (seen.includes(el)) {
//     //         dublicates.push(el)
            
//     //     }
//     //     else seen.push(el)
        
//     // }
//     // return [...new Set(dublicates)]

//     arr.map(num => {
//         if (seen.includes(num)) {
//             dublicates.push(num)
            
//         }
//         else seen.push(num)
        
//     })
//     return dublicates
// }



// console.log(saveDuplicates([1, 2, 2, 3, 3, 4, 2, 2, 4, 4])); // [1, 2, 3, 4]

function drawSquareInSquare(size) {
    for (let i = 0; i < size; i++) {
      let row = "";
      for (let j = 0; j < size; j++) {
        if (i === 0 || i === size - 1 || j === 0 || j === size - 1 || i === j || i + j === size - 1) {
          row += "* ";
        } else {
          row += "  ";
        }
      }
      console.log(row);
    }
  }
  
  // Пример вызова функции:
  drawSquareInSquare(5);