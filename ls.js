const newLs = require("fs");

function ls() {
  process.stdin.on("data", (data) => {
    const cmd = data.toString().trim();
    if (cmd === "ls") {
      newLs.readdir("./", "utf8", (err, files) => {
        if (err) {
          throw err;
        } else {
          process.stdout.write(files.join("\n"));
          process.stdout.write("prompt > ");
        }
      });
    }
    process.stdout.write("You typed: " + cmd);

    process.stdout.write("\nprompt > ");
  });
}

module.exports = ls;
