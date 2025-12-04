

function test1() {
  const array1 = [];
  const start = Date.now();
  for (let i = 0; i < 10000000; i++) {
    array1.push({
      foo: "hello world",
      bar: 42,
      trueOrFalse: i % 2 === 0
    });
  }
  const end = Date.now();
  console.log(`Time taken to create array of 10 million elements: ${end - start} ms`);
}

function test2() {
}

function run() {
  console.log('This is a test for long arrays.');

  test1();
  test2();
}


run();