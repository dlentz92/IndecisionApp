"use strict";

console.log("app.js is running");

// JSX -JS XML

// var template = <p>This is JSX from app.js</p>;

var template = React.createElement("h1", { id: "Newapp" }, "did this change");

var appRoute = document.getElementById("app");

ReactDOM.render(template, appRoute);
