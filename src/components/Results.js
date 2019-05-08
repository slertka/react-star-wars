import React from "react";

class Results extends React.Component {
  render() {
    const characters = this.props.characters.map(char => {
      return <li>{char.name}</li>;
    });

    return <ul>{characters}</ul>;
  }
}

export default Results;
