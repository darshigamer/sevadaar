const { chalk, inquirer, print } = require("./tools/index.js");
var moment = require("moment");
var colors = require("colors");
var userHome = require("user-home");

// DETECT IP *START!
var os = require("os");
var interfaces = os.networkInterfaces();
var addresses = [];
for (var k in interfaces) {
    for (var k2 in interfaces[k]) {
        var address = interfaces[k][k2];
        if (address.family === "IPv4" && !address.internal) {
            addresses.push(address.address);
        }
    }
}
// DETECT IP *END!

const questionTools = [
    "➥ Information",
    "➥ Mass Delete Post/Photo",

    "➥ F-L-C -> Hashtag Target",
    "➥ F-L-C -> Location Target",

    "➥ Unfollow All Following",
    "➥ Unfollow Not Followback",
    "\n",
];

const menuQuestion = {
    type: "list",
    name: "choice",
    message: "Select tools:\n  Read the (❆ Information) first before using the tool!\n\n",
    choices: questionTools,
};

const main = async () => {
    try {
        const { choice } = await inquirer.prompt(menuQuestion);
        choice == questionTools[0] && require("./tools/info.js");
        choice == questionTools[1] && require("./tools/delallmedia.js");
        choice == questionTools[2] && require("./tools/fhtauto.js");
        choice == questionTools[3] && require("./tools/fltauto.js");
        choice == questionTools[4] && require("./tools/unfollowall.js");
        choice == questionTools[5] && require("./tools/unfollnotfollback.js");
        choice == questionTools[6] && process.exit();
    } catch (err) {
        print(err, "err");
    }
};

console.log(chalk`{bold.green
  ____  _______     ___    ____    _        _    ____
/ ___|| ____\ \   / / \  |  _ \  / \      / \  |  _ \
\___ \|  _|  \ \ / / _ \ | | | |/ _ \    / _ \ | |_) |
 ___) | |___  \ V / ___ \| |_| / ___ \  / ___ \|  _ <
|____/|_____|  \_/_/   \_\____/_/   \_\/_/   \_\_| \_\
  Ξ OWNER  : Darshi
  Ξ EMAIL  : notdarshi@gmail.com
  Ξ UPDATE : Thursday, December 29, 2022

  116 111 111 108 115 105 103  118 51 
  }`);
console.log(chalk`{bold.red   •••••••••••••••••••••••••••••••••••••••••}`);
console.log("  Ξ START  : ".bold.red + moment().format("D MMMM YYYY, h:mm:ss a"));
console.log("  Ξ YPATH  : ".bold.red + userHome);
console.log("  Ξ YOUIP  : ".bold.red + addresses);
console.log(chalk`{bold.red   •••••••••••••••••••••••••••••••••••••••••}`);
main();
