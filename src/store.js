import { configureStore } from "@reduxjs/toolkit";
const TEXT_UPDATE = "TEXT_UPDATE";
const defaultMD =
  "# Header1\n" +
  "## Header2\n" +
  "[links](https://www.freecodecamp.org)\n" +
  "Heres some code, `<div></div>`, between 2 backticks.\n" +
  "```\n" +
  "// this is multi-line code:\n" +
  "function anotherExample(firstLine, lastLine) {\n" +
  "if (firstLine == '```' && lastLine == '```') {\n" +
  "   return multiLineCode;\n" +
  "  }\n" +
  "}\n" +
  "```\n" +
  "1. List Item\n" +
  "> Block Quotes!\n" +
  "![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)\n" +
  "You can also make text **bold**... whoa!";
const updateText = (text) => {
  return {
    type: TEXT_UPDATE,
    input: text,
  };
};

const baseReducer = (state = { text: defaultMD }, action) => {
  switch (action.type) {
    case TEXT_UPDATE:
      return { text: action.input };
    default:
      return state;
  }
};

const store = configureStore({
  reducer: baseReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
export { updateText };
