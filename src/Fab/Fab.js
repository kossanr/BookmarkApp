import React from "react";

export default class Fab extends React.Component {
  render() {
    return (
      <div className="fab" onClick={(e) => this.props.showForm(true)}>
        &#43;
      </div>
    );
  }
}
