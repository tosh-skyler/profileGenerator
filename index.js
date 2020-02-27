var inquirer = require('inquirer');
var fs = require('fs');
var axios = require("axios");
var generateHTML = require('./generateHTML.js');
const questions =
    [
        {
            type: 'input',
            message: 'What is your favorite color?',
            name: 'color'
        },
        {
            type: 'input',
            message: 'Enter your GitHub username',
            name: 'username'
        }
	];
	

	function init() {
		inquirer.prompt(questions)
	}

	init();