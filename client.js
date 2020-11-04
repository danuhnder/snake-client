const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.131',
    port: 50542
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on('data', data => console.log(data))
  conn.on('connect', () => {
    console.log("SNAKE IS DEPLOYED");
    conn.write('Name: DAN');
    // setInterval( () => conn.write('Move: up'), 200);
  });
  


  return conn;
}
module.exports = { connect };