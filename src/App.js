import React from "react";
import BookmarkApp from "./BookmarkApp/BookmarkApp";
import AddBookmark from "./AddBookmark/AddBookmark";

//use state to keep track of which componenet should be displayed: AddBookmark or BookmarkList

export default class App extends React.Component {
  state = {
    bookmarks: [],
    showAddForm: false,
  };

  //componentDidMount is executed after the first render only on the client side.
  componentDidMount() {
    const url = "https://tf-ed-bookmarks-api.herokuapp.com/v3/bookmarks";
    const options = {
      method: "GET",
      headers: {
        Authorization:
          "Bearer $2a$10$LhwC9i4cuDYWGUBlck2aZOfRZKXDoxjiYYVD0QoAIwgJceQNCgI/2",
        "Content-Type": "application/json",
      },
    };
    fetch(url, options)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Somehing went wrong, please try again");
        }
        return res;
      })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          bookmarks: data,
          error: null,
        });
      })
      .catch((err) => {
        this.setState({ error: err.message });
      });
  }
  //methods
  setShowAddForm(show) {
    this.setState({
      showAddForm: show,
    });
  }

  addBookmark(bookmark) {
    this.setState({
      //the spread operator is used to copy the bookmarks array into a new array then the new bookmark is added to the end of the new array.
      bookmarks: [...this.state.bookmarks, bookmark],
      showAddForm: false,
    });
  }
  render() {
    const page =
      this.state.showAddForm === true ? (
        <AddBookmark
          showForm={(show) => this.setShowAddForm(show)}
          handleAdd={(bookmark) => this.addBookmark(bookmark)}
        />
      ) : (
        <BookmarkApp
          bookmarks={this.state.bookmarks}
          showForm={(show) => this.setShowAddForm(show)}
        />
      );

    return <div className="App">{page}</div>;
  }
}
