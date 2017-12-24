#!/usr/bin/env node

const codename = require('./heh-cool-codename.js');
const last_arg = parseInt(process.argv[process.argv.length - 1]);

const output = (arr) => {
    console.log(arr.join(' '));
}


if (!(last_arg > 0 || last_arg < 0)) {
    output(codename());
} else {
    output(codename(last_arg))
}