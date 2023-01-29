const element = {
  type: "h1", // string that specifies the type of the DOM node we want to create
  props: {
    title: "foo", // props name can be anything and more than one
    children: "Hello", // can be HTML element e.g. <div><h1>Hello</h1></div> or text
  },
};

// Step 1 : Recreating createElement function

// element is an object with type and props.
// The only thing that our function needs to do is create that object.
export function createElement(type, props, ...children) {
  // rest parameter syntax for the children,
  // this way the children prop will always be an array.
  return {
    type,
    props: {
      ...props,
      children: children.map((child) =>
        typeof child === "object" ? child : createTextElement(child)
      ),
    },
  };
}

// For example, createElement("div") returns:

// {
//   type: "div",
//   props: { children: [] }
// }

// createElement("div", null, a, b) returns:

// {
//   type: "div",
//   props: { children: [a, b] }
// }

function createTextElement(text) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: [],
    },
  };
}
