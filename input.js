const connect = require("./client");

let connection;

const setupInput = function (conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  // stdin.on("data", handleUserInput);
  connection = conn;
  
  const handleUserInput = process.stdin.on('data', (key) => {
    // your code here
    if (key === '\u0003') {
      process.exit();
    }
    if (key === 'w') {
      conn.write('Move: up');
    }
    if (key === 's') {
      conn.write('Move: down');
    }
    if (key === 'a') {
      conn.write('Move: left');
    }
    if (key === 'd') {
      conn.write('Move: right');
    }
    if (key === 'f') {
      conn.write('Say: Hello World!');
    }
  });
  return stdin;
};

module.exports = setupInput;