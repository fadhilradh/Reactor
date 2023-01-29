import Reactor from "./Reactor/index.js";
import * as ReactorDOM from "./ReactorDOM/index.js";

const element = Reactor.createElement(
  "div",
  null,
  Reactor.createElement("h1", null, "Hello World"),
  Reactor.createElement("h2", { id: "blue" }, "from Reactor"),
  Reactor.createElement("h3", { id: 1 }, "with love")
);

/** @jsx Reactor.createElement */
// If we have a comment like this one, when babel transpiles the JSX it
// will use the function we define.
// const elementToJSX = (
//   <div id="foo">
//     <a>bar</a>
//     <b />
//   </div>
// );

const container = document.getElementById("root");
ReactorDOM.render(element, container);
