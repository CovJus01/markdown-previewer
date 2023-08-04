import React from "react";

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.updateText(event.target.value);
  }

  render() {
    return (
      <div className="box-container">
        <h1>Editor</h1>
        <textarea
          id="editor"
          value={this.props.input.text}
          onChange={this.handleChange}
        ></textarea>
      </div>
    );
  }
}

export default Editor;
