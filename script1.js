console.log("Hello Havij");

setTimeout(function () {
  console.log("Asynchronous result");
}, 5000);

console.log("Synchronous result");

// set aside, run in parallel
setTimeout(function () {
  console.log("Asynchronous result 2");
}, 5000);

console.log("Synchronous result 2");
