const sentence = "hello there from lighthouse labs";
let timer = 0
setTimeout(() => {

  for (const char of sentence) {

    setTimeout(() => {
      process.stdout.write(char);

    }, timer += 50)
  }

}, 1000)
