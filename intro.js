// https://github.com/facebook/react/blob/f4cc45ce962adc9f307690e1d5cfa28a288418eb/packages/react/src/ReactElement.js#L111
// STRAIGHT FROM REACT CODEBASE :
// const element = {
//   // This tag allows us to uniquely identify this as a React Element
//   $$typeof: REACT_ELEMENT_TYPE,

//   // Built-in properties that belong on the element
//   type: type, (we'll be using this)
//   key: key,
//   ref: ref,
//   props: props, (we'll be using this)

//   // Record the component responsible for creating this element.
//   _owner: owner,
// };

const element = {
  type: "h1", // string that specifies the type of the DOM node we want to create
  props: {
    title: "foo", // props name can be anything and more than one
    children: "Hello", // can be HTML element e.g. <div><h1>Hello</h1></div> or text
  },
};

// const container = document.getElementById("root");
ReactDOM.render(element, container);

// ReactDOM.render is basically this :

const container = document.getElementById("root");

const node = document.createElement(element.type);
node["title"] = element.props.title;

const text = document.createTextNode("");
text["nodeValue"] = element.props.children;

node.appendChild(text);
container.appendChild(node);

// end of reactDOM.render
