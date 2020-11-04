const { connect } = require('./client');
const { setupInput } = require('./input');
// const conn = require('./client');

console.log('Connecting ...');
// connect();

setupInput(connect());
