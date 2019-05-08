import React from "react";
import "./SearchForm.css";

class SearchForm extends React.Component {
  render() {
    return (
      <form onSubmit={e => this.props.handleSubmit(e)}>
        <label htmlFor="character">Character Name: </label>
        <input
          name="character"
          type="text"
          placeholder="Enter character name here..."
          value={this.props.searchVal}
          onChange={e => this.props.setSearchVal(e.target.value)}
        />
        <input type="submit" />
      </form>
    );
  }
}

export default SearchForm;
