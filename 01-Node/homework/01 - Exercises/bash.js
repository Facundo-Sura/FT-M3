const process = require('process');
const { Z_ASCII } = require('zlib');
const commands = require('./commands/index.js');

function print(output) {
   process.stdout.write(output);
   process.stdout.write("\nprompt > ");
}
function bash() {
   process.stdout.write("prompt > ");
   process.stdin.on("data", data => {
      let args = data.toString().trim().split(" ");

      const cmd = args.shift();
      args = args.join(" ");
      //console.log("cmd:", cmd);
      //console.log("args:", args);
      //if (commands.hasOwnProperty(cmd)) {
      //   commands[cmd](print, args)
      //} else {
      //   print (`command not found: ${cmd}`)
      //}
      commands[cmd]
         ? commands[cmd](print, args)
         : print(`command not found: ${cmd}`)
   })
}

bash();
module.exports = {
   print,
   bash,
};
