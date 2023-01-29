// the render function from react-dom codebase :
// https://github.com/facebook/react/blob/f4cc45ce962adc9f307690e1d5cfa28a288418eb/packages/react-dom/src/client/ReactDOMLegacy.js#L277
export function render(element, container) {
  const DOM =
    element.type === "TEXT_ELEMENT"
      ? document.createTextNode("")
      : document.createElement(element.type);

  //   assign the element props to the node.
  Object.keys(element.props)
    .filter((key) => key !== "children")
    .forEach((name) => {
      DOM[name] = element.props[name];
    });

  container.appendChild(DOM);

  // recursively do the same for every child inside props.children

  element.props.children.forEach((child) => render(child, DOM));
}
