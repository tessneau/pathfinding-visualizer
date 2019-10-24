import React, { Component } from "react";
import "./Node.scss";

class Node extends Component {
  handleClick = () => {
    this.props.onNodeClick(this.props.row, this.props.col);
  };

  render() {
    const {
      col,
      isFinish,
      isStart,
      isWall,
      onMouseDown,
      onMouseEnter,
      onMouseUp,
      row
    } = this.props;
    const extraClassName = isFinish
      ? "node__finish"
      : isStart
      ? "node__start"
      : isWall
      ? "node__wall"
      : "";

    return (
      <div
        id={`node-${row}-${col}`}
        className={`node ${extraClassName}`}
        onMouseDown={() => onMouseDown(row, col)}
        onMouseEnter={() => onMouseEnter(row, col)}
        onMouseUp={() => onMouseUp()}
        onClick={this.handleClick}
      ></div>
    );
  }
}

export default Node;
