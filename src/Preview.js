import React from "react";
import { marked } from "marked";

marked.use({
  breaks: true,
});

class Preview extends React.Component {
  render() {
    return (
      <div
        id="preview"
        className="box-container"
        dangerouslySetInnerHTML={{
          __html: marked.parse(this.props.input.text),
        }}
      ></div>
    );
  }
}

export default Preview;
