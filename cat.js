const newCat = require("fs");

function cat() {
  // process.stdout.write('prompt > ');

  process.stdin.on("data", (data) => {
    const cmd = data.toString().trim();
    const cmdArray = cmd.split(" ");
    if (cmdArray[0] === "cat") {
      newCat.readFile(cmdArray[1], "utf-8", (err, data) => {
        if (err) {
          throw err;
        }

        process.stdout.write(data);
      });
    }

    process.stdout.write("You typed: " + cmd);

    process.stdout.write("\nprompt > ");
  });
}

module.exports = cat;
