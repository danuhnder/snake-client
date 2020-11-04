let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', data => handleUserInput(data));
  return stdin;
};

const handleUserInput = function (keyPress) {
  if (keyPress === '\u0003') {
    process.exit();
  };
  if (keyPress === '\u0077') {
    return connection.write("Move: up");
  };
  if (keyPress === '\u0073') {
    return connection.write("Move: down");
  };
  if (keyPress === '\u0061') {
    return connection.write("Move: left");
  };
  if (keyPress === '\u0064') {
    return connection.write("Move: right");
  };
};

module.exports = { setupInput }