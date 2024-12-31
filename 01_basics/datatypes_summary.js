// there are two types of datatypes primitive and nonprimitive 
// based how data is stored in memory and accessed 
//primitive
      // 7 types : String, Number, Boolean, null, undefined, Symbol,BigInt
// Refrence (non primitive)
      //Array, Object,Functions

    const score = 100
    const scoreValue = 100.3

    const isLoggedIn = false
    const outsideTemp = null
    let userEmail;

    const id = Symbol('123')
    const anotherId = Symbol('123')

    // console.log(id === anotherId)

    const bigNumber = 472984790174927390149485203n

    const heros = ["shaktiman", "naagraj", "doga"]
    let myObj = {
        name: "basas",
        age: 22,
    }

    const myFunction = function(){
        console.log("hello world")
    }

    // console.log(typeof myObj)



//*********************************************************** *

// Stack (primitive){a copy of the variable is given} , Heap (non primitive){reference is given of original value}

let myYoutubeMain = "hiteshchaoudharydotcom"


let anotherName = myYoutubeMain
anotherName = "chaiaurcode"
console.log(myYoutubeMain);
console.log(anotherName);

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl",
}

let userTwo = userOne
userTwo.email = "hitesh@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);

































