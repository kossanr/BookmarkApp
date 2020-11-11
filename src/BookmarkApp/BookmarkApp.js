import React from "react";
import "./BookmarkApp.css";
import BookmarkList from "../BookmarkList/BookmarkList";
import Fab from "../Fab/Fab";

export default class BookmarkApp extends React.Component {
  render() {
    return (
      <div className="BookmarkApp">
        <h2> Your Bookmarks </h2>
        <BookmarkList />
        <Fab showForm={this.props.showForm} />
      </div>
    );
  }
}
