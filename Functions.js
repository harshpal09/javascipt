// function plus1(x) {
// return x + 1;
// }

// let x = plus1(2);

// let square = function(x){
//     return x * x;
// }
// square(plus1(3));

// console.log("value =>",square(plus1(3)));

// const plusOne = x => x+1;
// const squareOne = y => {
//     return y*y;
// }

// console.log("one =>",square(plusOne(7)));

// Global context
// function regularFunctionGlobal() {
//     console.log("Global context:", "jj"); // refers to the global object (window in browsers)
// }

//   regularFunctionGlobal();
//   console.log("value =>")

// Object method
//   const obj = {
//     method: function() {
//       console.log("Object method:", this); // refers to the object 'obj'
//     }
//   };

//   obj.method();

// Event handler (context within the event listener)
//   document.getElementById('myButton').addEventListener('click', function() {
//     console.log("Event handler:", this); // refers to the clicked button element
//   });

    let a = [];
    a.push(1, 2, 3);
    a.reverse();

//    const points.dist = function () {
//         let p1 = this[0];
//         let p2 = this[1];

//         let a = p2.x - p1.x;
//         let b = p2.y - p1.y;
//         return Math.sqrt(a * a + b * b);
//     };
//     points.dist();
// console.log("value")

//classes in Javascript ---------------------------------------------
class Point{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    distance(){
        return Math.sqrt(this.x * this.y + this.y * this.y);
    }
}

let p = new Point();

    console.log("sdsdd =>",p.distance());

