console.log("app.js is running");

// JSX -JS XML

// var template = <p>This is JSX from app.js</p>;

var template = React.createElement("h1", null, "this is JSX from app.js!");

var appRoute = document.getElementById("app")

ReactDom.render(template, appRoute);