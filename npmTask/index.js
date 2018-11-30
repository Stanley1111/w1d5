var chalk = require("chalk");
var message = "Hello " + chalk.yellow("World");
var message2 = chalk.cyan.underline.bold("SKYNET HAS AWOKEN");
console.log(message);
for (i = 0; i < 100; i++) {
console.log(message2);
}