function compareAge(name, age) {
    const myAge = 25;
    if(age>myAge){
        return `${name} is older than me`
    }
    else if (age<myAge) {
        return `${name} is younger than me`

    }
    else {
        return `${name}  has the same age`
    }
}




console.log(compareAge("Joel", 36)); // ➞ "Joel is older than me."
console.log(compareAge("Samuel", 24)); // ➞ "Samuel is younger than me."
console.log(compareAge("Lily", 28)); // ➞ "Lily is older than me."
console.log(compareAge("Jolly", 25)); 