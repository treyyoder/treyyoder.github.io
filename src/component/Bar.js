import React from "react";
import PropTypes from "prop-types";
import "./Bar.css";

export default class Bar extends React.Component {
  static propTypes = {
    value: PropTypes.number,
  };

  render() {
    return (
      <div>
        <div className="bar" style={{width:this.props.value}}></div>
      </div>
    );
  }
}
