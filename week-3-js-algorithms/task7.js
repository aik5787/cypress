function longerString(firstString, secondString) {
    if(firstString.length > secondString.length){
      return firstString
    }
    else if (firstString.length > secondString.length) {
      return 'length is equal'
    }
    else{
        return secondString
    }
  }




console.log(longerString('codemify', 'test')) // codemify
console.log(longerString('automation', 'coding')) // automation
console.log(longerString('automation', 'the codemify')) // the codemify