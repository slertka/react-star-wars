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
        <label htmlFor="searchType">Filter: </label>
        <select onChange={e => this.props.setFilter(e.target.value)}>
          <option value="planets">Planet</option>
          <option value="starships">Starship</option>
          <option value="vehicles">Vehicle</option>
          <option value="people">Character</option>
          <option value="films">Film</option>
          <option value="species">Species</option>
        </select>
        <input type="submit" />
      </form>
    );
  }
}

export default SearchForm;
