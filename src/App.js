import React from "react";
import "./App.css";
import SearchForm from "./components/SearchForm";
import Results from "./components/Results";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      searchVal: "",
      filterVal: "planets", // set default to planets since its the first option
      searchPending: false,
      hasError: false,
      searchExecuted: false
    };
  }

  setSearchVal(val) {
    this.setState({
      searchVal: val
    });
  }

  setFilter(inputVal) {
    this.setState({
      filterVal: inputVal
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const url = `https://swapi.co/api/${this.state.filterVal}/?search=`;
    const searchTerm = this.state.searchVal.includes(" ")
      ? this.state.searchVal.replace(" ", "+")
      : this.state.searchVal;

    const searchUrl = url + searchTerm;
    console.log(searchUrl);

    this.setState({
      searchPending: true,
      searchExecuted: false
    });

    // fetch characters based on search input
    fetch(searchUrl)
      .then(res => {
        if (!res.ok) {
          throw new Error();
        }
        return res.json();
      })
      .then(resj => {
        this.setState({
          searchPending: false,
          characters: resj.results,
          searchExecuted: true
        });
      })
      .catch(err => {
        console.log(err);
        this.setState({
          searchPending: false,
          hasError: true
        });
      });
  }

  render() {
    const searchPending = this.state.searchPending ? (
      <p>Searching the galaxy...</p>
    ) : (
      ""
    );

    const fetchError = this.state.hasError ? (
      <p>Something went wrong. Please try again!</p>
    ) : (
      ""
    );

    return (
      <div className="App">
        <h1>Star Wars App</h1>
        <SearchForm
          handleSubmit={e => this.handleSubmit(e)}
          setSearchVal={val => this.setSearchVal(val)}
          setFilter={val => this.setFilter(val)}
          searchVal={this.state.searchVal}
          searchExecuted={this.state.searchExecuted}
        />
        {searchPending}
        <Results characters={this.state.characters} />
        {fetchError}
      </div>
    );
  }
}

export default App;
