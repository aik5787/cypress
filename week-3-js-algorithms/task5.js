function isBiggerThan5(number) {
    if(number > 5){
      return true
    }
    else if (number === 5){
      return 'number is equal 5'
    }
    else{
      return false
    }
  }
  
  console.log(isBiggerThan5(6)) 
  console.log(isBiggerThan5(5)) 
  console.log(isBiggerThan5(4)) 
  console.log(isBiggerThan5(1))