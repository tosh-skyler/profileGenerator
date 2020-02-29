var inquirer = require("inquirer");
var fs = require("fs");
var axios = require("axios");
var generateHTML = require("./generateHTML.js");
const questions = [
  {
    type: "input",
    message: "What is your favorite color?",
    name: "color"
  },
  {
    type: "input",
    message: "Enter your GitHub username",
    name: "username"
  }
];

function fetchGithubData(username, color, starCount) {
  const queryUrl = `https://api.github.com/users/${username}`;
  axios.get(queryUrl).then(response => {
    const data = response.data;
    let user = {
      username: data.login,
      avatar: data.avatar_url,
      profile: data.html_url,
      blog: data.blog,
      repoCount: data.public_repos,
      name: data.name,
      followers: data.followers,
      followedUsers: data.following,
      bio: data.bio,
      location: data.location,
      starCount,
      color
    };
    console.log(user.username, JSON.stringify(user), starCount);
  });
}

// function writeToFile(fileName, data) {}

function init() {
  inquirer.prompt(questions).then(function(responses) {
    fetchGithubData(responses.username);
  });
}

init();
