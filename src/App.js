import "./App.css";
import editor from "./Editor.js";
import preview from "./Preview.js";
import store from "./store.js";
import { updateText } from "./store.js";
import { Provider, connect } from "react-redux";

function mapStateToProps(state) {
  return { input: state };
}

function mapDispatchToProps(dispatch) {
  return {
    updateText: function (text) {
      dispatch(updateText(text));
    },
  };
}

const Editor = connect(mapStateToProps, mapDispatchToProps)(editor);
const Preview = connect(mapStateToProps, null)(preview);

function App() {
  return (
    <Provider store={store}>
      <Editor />
      <Preview />
    </Provider>
  );
}

export default App;
