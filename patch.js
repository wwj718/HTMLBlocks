var fs = require("fs");

var file = fs.readFileSync('./node_modules/scratch-blocks/javascript_compressed.js', {encoding: "utf8"});
file = "module.exports = function(Blockly){" + file + "};";
fs.writeFileSync("./node_modules/scratch-blocks/javascript_compressed_nodejs.js", file);
