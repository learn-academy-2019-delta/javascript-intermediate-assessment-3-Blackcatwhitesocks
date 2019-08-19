// ASSESSMENT 3: INTERMEDIATE JAVASCRIPT
// Coding practical questions

// Be sure to use all given test cases

// 1. Write a function called getFib that returns the first 10 numbers of the Fibonacci sequence in an array. Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// function getFib(){
//   let arr = [1]
//   let last2 = 0
//   let last1 = 1
//   for (var i = 0; i<9; i++){
//   let sum = last2 + last1
//   arr.push(sum)
//   last2 = last1
//   last1 = sum
//   }
// return arr
// }
// console.log(getFib());

// 2. Write a function called oddChecker that takes in an array and returns a new array of only odd numbers.

// var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]

// function oddChecker(arr){
//   let oddArr = []
//   for (i = 0; i < arr.length; i++){
//     if(typeof arr[i] == "number"){
//       if( Math.abs(arr[i])%2 === 1){
//         oddArr.push(arr[i])
//       }
//     }
//   }
//   return oddArr
// }
// console.log(oddChecker(fullArr1));

// Expected output: [9, 7, 199, -9]

// var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]

// function oddChecker(arr){
//   let oddArr = []
//   for (i = 0; i < arr.length; i++){
//     if(typeof arr[i] == "number"){
//       if( Math.abs(arr[i])%2 === 1){
//         oddArr.push(arr[i])
//       }
//     }
//   }
//   return oddArr
// }
// console.log(oddChecker(fullArr2));
// Expected output: [7, 23, -823]



// 3. Given the object below, complete the console.log to find specific information:

// var bicycle = {
// 	type: "Roadbike",
// 	gear: ["comfy seat", "cool handlebars", "vintage bell", "toe clips"],
// 	wheels: {
// 		count: 2,
// 		specs: ["road tires", "AX-7563", "80-115 PSI"],
// 		brand: "Trek"
// 	}
// }

// Log the type of bicycle:
// console.log(bicycle.type)

// Log the bell:
// console.log(bicycle.gear[2])

// Log the PSI:
// console.log(bicycle.wheels.specs[2])


// 4. Write a function that takes one argument of type array and returns the contents of that array in reverse order.

// var originalArray1 = [1, 2, 3, 4, 5, 6, 7]

// function Reverse(arr){
//   return arr.reverse()
// }
// console.log(Reverse(originalArray1));

// Expected output: [7, 6, 5, 4, 3, 2, 1],

// var originalArray2 = ["a", "t", "l", "e", "d"]

// function Reverse(arr){
//   return arr.reverse()
// }
// console.log(Reverse(originalArray2));

// Expected output: ["d", "e", "l", "t", "a"]



// 5. Write the code that would make this test pass.

// describe("multTwo", () => {
//     test ("returns an array with all the numbers multiplied by two", () => {
//         expect(multTwo([3, 4, 5])).toEqual([6, 8, 10])
//         expect(multTwo([23, -9, 0])).toEqual([46, -18, 0])
//         expect(multTwo([4.5, -4.5, 12])).toEqual([9, -9, 24])
//     })
// })
// / const multTwo = arr1.map(x => {
//   console.log(x*2)
// });

// arr1.forEach(function(x) {
//   console.log(x*2)
// })


// 6. Write a function called letterCounter that logs the number of times the letter "l" appears in ourString.

// var ourString = "Hello Learn Students!"
// Expected output: 3

// / function letterCounter(str){
//   let counter = 0
//   for (var i=0; i < str.length; i++){
//     if( str.charAt(i) === 'l' || str.charAt(i) === 'L'){
//       counter += 1
//     }
//   }
//   return counter
// }
// console.log(letterCounter(ourString));


// 7. Create a function that takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters.

// var middleLetters1 = "hello"

// function middleLetters(str){
//     if ( str.length%2 === 1){
//       return str.charAt((str.length)/2)
//     } else {
//      return str.substring((str.length)/2-1, (str.length)/2+1)
//    }
// }
// console.log(middleLetters(middleLetters1));

// Expected output: “l”
/

// function middleLetters(str){
//
//     if ( str.length%2 === 1){
//       return str.charAt((str.length)/2)
//     } else {
//      return str.substring((str.length)/2-1, (str.length)/2+1)
//    }
// }
// console.log(middleLetters(middleLetters2));

// Expected output: “am” - looks like a typo here, "lamas" is odd, should return 1 letter 




// 8. Write a program to get the area of a sphere using object classes. Create three spheres with different radi as test cases. Area of a sphere =  4πr^2 (four pi r squared)

// class sphere{
//   constructor(radius){
//     this.radius = radius;
//   }
//   calcArea (){
//   return  4*Math.PI*Math.pow(this.radius, 2)
//   }
// }
// let sphere1 = new sphere(2)
// let sphere2 = new sphere(3)
// let sphere3 = new sphere(7)
//
// console.log(sphere1.calcArea());
// console.log(sphere2.calcArea());
// console.log(sphere3.calcArea());


// 9. Use object destructuring to return the nested values of specs. Expected output: 4, "manual"
// Don't overthink this one, it's just destrcturing practice.

// var myCar = {
//   make: "VW",
//   model: "Jetta",
//   specs: {
//     doors: 4,
//     transmission: "manual",
//   }
// }
// console.log(myCar.specs.doors, myCar.specs.transmission);


// 10. Stretch: Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// var numbersToAdd1 = [2, 4, 45, 9]

// function numbersToAdd(arr){
//   let accumulator = 0
//   let newArr = []
//   for (var i=0; i < arr.length; i++){
//   accumulator = accumulator + arr[i]
//   newArr.push(accumulator)
//   }
// return newArr
// }
// console.log(numbersToAdd(numbersToAdd1));

// Excpected output: [2, 6, 51, 60]

// var numbersToAdd2 = [0, 7, -8, 12]
// function numbersToAdd(arr){
//   let accumulator = 0
//   let newArr = []
//   for (var i=0; i < arr.length; i++){
//   accumulator = accumulator + arr[i]
//   newArr.push(accumulator)
//   }
// return newArr
// }
// console.log(numbersToAdd(numbersToAdd2));

// Expected output: [0, 7, -1, 11]

// var numbersToAdd3 = []

// function numbersToAdd(arr){
//   let accumulator = 0
//   let newArr = []
//   for (var i=0; i < arr.length; i++){
//   accumulator = accumulator + arr[i]
//   newArr.push(accumulator)
//   }
// return newArr
// }
// console.log(numbersToAdd(numbersToAdd3));

// Expected output: []
