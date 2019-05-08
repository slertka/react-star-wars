import React from "react";

class Results extends React.Component {
  render() {
    const characters =
      this.props.characters.length && this.props.searchExecuted === 0 ? (
        <p>
          We couldn't find anything that matches your search. Please try again.
        </p>
      ) : (
        this.props.characters.map(char => {
          return <li>{char.name}</li>;
        })
      );

    return <ul>{characters}</ul>;
  }
}

export default Results;
