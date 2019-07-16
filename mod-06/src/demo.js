import { Observable, from, fromEvent, interval } from "rxjs";
import { ajax } from "rxjs/ajax";
import { switchMap, map, filter, scan } from "rxjs/operators";

const mapNumbers = document.getElementById("mapNumbers");
const startTimer = document.getElementById("startTimer");
const loadJokes = document.getElementById("loadJokes");
const result = document.getElementById("result");

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const jokesUrl =
  "http://api.icndb.com/jokes/random/10/?limitTo=[nerdy]&escape=javascript";

// const stream$ = new Observable(function(subscription) {
//   console.log("The subscription");
//   //   subscription.next(1);
//   //   subscription.next(2);
//   //   subscription.next(3);
//   //   subscription.next(4);
//   //   setTimeout(() => subscription.next(5), 1000);

//   numbers.forEach(n => subscription.next(n));

//   subscription.complete();
// });

// const stream$ = from(numbers);

// stream$.subscribe(
//   item => console.log(item),
//   err => console.log(err),
//   () => console.log("completed")
// );

fromEvent(mapNumbers, "click")
  .pipe(
    switchMap(() => from(numbers)),
    filter(n => n % 2 === 0),
    map(n => ({ n })),
    scan((p, n) => [...p, n], [])
  )
  .subscribe(evenNumbers => {
    console.log(evenNumbers);
    result.textContent = JSON.stringify(evenNumbers);
  });

// mapNumbers.addEventListener("click", () => {
//   const evenNumbers = numbers.filter(n => n % 2 === 0).map(n => ({ n }));

//   result.textContent = JSON.stringify(evenNumbers);
// });

fromEvent(startTimer, "click")
  .pipe(
    switchMap(() => interval(1000)),
    filter(n => n % 2 === 0),
    map(n => ({ n })),
    scan((p, n) => [...p, n], [])
  )
  .subscribe(evenNumbers => {
    console.log(evenNumbers);
    result.textContent = JSON.stringify(evenNumbers);
  });

// startTimer.addEventListener("click", () => {
//   const values = [];
//   let n = 0;
//   setInterval(() => {
//     n += 1;
//     if (n % 2 === 0) {
//       values.push({ n });
//       result.textContent = JSON.stringify(values);
//     }
//   }, 1000);
// });

fromEvent(loadJokes, "click")
  .pipe(
    switchMap(() => ajax.getJSON(jokesUrl))
    // filter(n => n % 2 === 0),
    // map(n => ({ n })),
    // scan((p, n) => [...p, n], [])
  )
  .subscribe(evenNumbers => {
    console.log(evenNumbers);
    result.textContent = JSON.stringify(evenNumbers);
  });

// loadJokes.addEventListener("click", () => {
//   fetch(jokesUrl)
//     .then(rsp => rsp.json())
//     .then(data => data.value)
//     .then(jokes => {
//       result.textContent = JSON.stringify(jokes);
//     });
// });
