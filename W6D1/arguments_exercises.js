function sum1(x) {
  let array = Array.from(arguments);
  let sum = 0;
  array.forEach( (el) => {
    sum += el;
  });

  return sum;
}

// console.log(sum1(1, 2, 3, 4)); // === 10
// console.log(sum1(1, 2, 3, 4, 5)); // === 15

function sum2(...args) {
  let sum = 0;
  args.forEach( (el) => {
    sum += el;
  });

  return sum;
}

// console.log(sum2(1, 2, 3, 4)); // === 10
// console.log(sum2(1, 2, 3, 4, 5)); // === 15

// Function.prototype.myBind = function myBind(obj) {
//   let that = this;
//   let args = Array.from(arguments).slice(1);
//
//   return function () {
//     let args2 = Array.from(arguments);
//     // console.log('that', that);
//     console.log('args: ', args);
//     console.log('args2: ',  args2);
//     return that.apply(obj, args.concat(args2));
//   };
// };

Function.prototype.myBind = function myBind(obj, ...args) {
  let that = this;

  return (...args2) => {
    return that.apply(obj, args.concat(args2));
  };
};

// class Cat {
//   constructor(name) {
//     this.name = name;
//   }
//
//   says(sound, person) {
//     console.log(`${this.name} says ${sound} to ${person}!`);
//     return true;
//   }
// }
//
// const markov = new Cat("Markov");
// const breakfast = new Cat("Breakfast");
//
// markov.says("meow", "Ned");
// // Markov says meow to Ned!
// // true
//
// // bind time args are "meow" and "Kush", no call time args
// markov.says.myBind(breakfast, "meow", "Kush")();
// // Breakfast says meow to Kush!
// // true
//
// // no bind time args (other than context), call time args are "meow" and "me"
// markov.says.myBind(breakfast)("meow", "a tree");
// // Breakfast says meow to a tree!
// // true
//
// // bind time arg is "meow", call time arg is "Markov"
// markov.says.myBind(breakfast, "meow")("Markov");
// // Breakfast says meow to Markov!
// // true
//
// // no bind time args (other than context), call time args are "meow" and "me"
// const notMarkovSays = markov.says.myBind(breakfast);
// notMarkovSays("meow", "me");
// // Breakfast says meow to me!
// // true


const curriedSum = function curriedSum(numArgs) {
  const numbers = [];

  return function _curriedSum(num) {
    numbers.push(num);

    if (numbers.length === numArgs) {
      let sum = 0;
      numbers.forEach((el) => {
        sum += el;
      });

      return sum;
    }

    return _curriedSum;
  };
};

const sum = curriedSum(4);
// console.log(sum(5)(30)(20)(1)); // => 56

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}


Function.prototype.curry = function curry(numArgs) {
  const numbers = [];
  let that = this;

  return function _curry() {
    let args = Array.from(arguments);
    // numbers.concat(args);
    args.forEach((el) => { numbers.push(el); });

    if (numbers.length === numArgs) {
      return that.apply(that, numbers);
    } else {
      return _curry;
    }
  };
};

let f1 = sumThree.curry(3);
 // tells `f1` to wait until 3 arguments are given before running `sumThree`
console.log(f1 = f1(4)); // [Function]
console.log(f1 = f1(20)); // [Function]
console.log(f1 = f1(6)); // = 30

// or more briefly:
console.log(sumThree.curry(3)(4)(20)(6)); // == 30

Function.prototype.betterCurry = function betterCurry(numArgs) {
  const numbers = [];
  // let that = this;

  const _curry = (...args) => {
    args.forEach( el => numbers.push(el));

    if (numbers.length === numArgs) {
      return this.call(this, ...numbers);
    } else {
      return _curry;
    }
  };

  return _curry;
};

let f2 = sumThree.betterCurry(3);
 // tells `f2` to wait until 3 arguments are given before running `sumThree`
console.log(f2 = f2(4)); // [Function]
console.log(f2 = f2(20)); // [Function]
console.log(f2 = f2(6)); // = 30

// or more briefly:
console.log(sumThree.betterCurry(3)(4)(20)(6)); // == 30
