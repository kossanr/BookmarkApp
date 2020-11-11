import React from "react";
import "./AddBookmark.css";

export default class AddBookmark extends React.Component {
  //must update list of bookmarks when user adds a new bookmark (access to state)
  render() {
    return (
      <div className="addbookmark">
        <h2>Add Bookmark</h2>
        <form className="addbookmark__form">
          <label htmlFor="title">Title:</label>
          <input type="text" name="title" id="title" placeholder="Title" />
          <label htmlFor="url">Url:</label>
          <input type="text" name="url" id="url" placeholder="url" />
          <label htmlFor="description">Description:</label>
          <textarea
            name="description"
            id="description"
            placeholder="description"
          />
          <label htmlFor="rating">Rating: </label>
          <input type="number" name="rating" id="rating" min="1" max="5" />

          <div className="addbookmark__buttons">
            <button>Cancel</button>
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    );
  }
}
