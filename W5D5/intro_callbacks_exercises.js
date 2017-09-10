const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Clock {
  constructor() {
    // 1. Create a Date object.
    let date = new Date();
    // 2. Store the hours, minutes, and seconds.
    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();
    // 3. Call printTime.
    this.printTime();
    // 4. Schedule the tick at 1 second intervals.
    setInterval(this._tick.bind(this), 1000);
  }

  printTime() {
    // Format the time in HH:MM:SS
    // Use console.log to print it.
    console.log(`${Clock.paddedTime(this.hours)}:${Clock.paddedTime(this.minutes)}:${Clock.paddedTime(this.seconds)}`);
  }

  static paddedTime(n) {
    return (n < 10) ? "0" + n : n.toString();
  }

  _tick() {
    // 1. Increment the time by one second.
    if (this.seconds === 59) {
      this.seconds = 0;
      if (this.minutes === 59) {
        this.minutes = 0;
        if (this.hours === 23) {
          this.hours = 0;
        } else {
          this.hours += 1;
        }
      } else {
        this.minutes += 1;
      }
    } else {
      this.seconds += 1;
    }
    // 2. Call printTime.
    this.printTime();
  }
}

let addNumbers = function addNumbers(sum, numsLeft, completionCallback){
  if (numsLeft > 0) {
    reader.question("Pick a number: ", function(numStr) {
      let num = parseInt(numStr);
      sum += num;
      console.log(sum);
      numsLeft -= 1;
      addNumbers(sum, numsLeft, completionCallback);
    });
  } else {
    completionCallback(sum);
    reader.close();
    return;
  }
};

let askIfGreaterThan = function askIfGreaterThan(el1, el2, callback) {
  reader.question(`Is the ${el1} greater than ${el2}? `, function(response) {
    (response === 'yes') ? callback(true) : callback(false);
  });
};

let innerBubbleSort = function innerBubbleSort(arr, i, madeAnySwaps,
   outerBubbleSortLoop) {
  if (i === arr.length - 1) {
    outerBubbleSortLoop(madeAnySwaps);
  } else {
    askIfGreaterThan(arr[i], arr[i + 1], (greaterThan) => {
      if (greaterThan) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        madeAnySwaps = true;
      }
      innerBubbleSort(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
    });
  }
};


function absurdBubbleSort(arr, sortCompletionCallback) {

  function outerBubbleSortLoop(madeAnySwaps) {
    if (madeAnySwaps) {
      innerBubbleSort(arr, 0, false, outerBubbleSortLoop);
    } else {
      sortCompletionCallback(arr);
    }

  }
  outerBubbleSortLoop(true);
  // Kick the first outer loop off, starting `madeAnySwaps` as true.
}


Function.prototype.myBind = function myBind(context) {
  // console.log(this);
  // console.log(Array.from(arguments)[0]);

  return () => {
    this.apply(context); };

  // return this.apply(context, Array.prototype.slice(arguments)) => {
  //   Function.protoype.apply(this, context);
  // // };
};


class Lamp {
  constructor() {
    this.name = "a lamp";
  }
}

const turnOn = function() {
   console.log("Turning on " + this.name);
};

const lamp = new Lamp();

turnOn(); // should not work the way we want it to

const boundTurnOn = turnOn.bind(lamp);
const myBoundTurnOn = turnOn.myBind(lamp);

boundTurnOn(); // should say "Turning on a lamp"
myBoundTurnOn(); // should say "Turning on a lamp"


// // const clock = new Clock();
// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));

// absurdBubbleSort([3, 2, 1], function (arr) {
//   console.log("Sorted array: " + JSON.stringify(arr));
//   reader.close();
// });

reader.close();
