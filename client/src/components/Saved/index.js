import React, { Component } from "react";
import SaveBookView from "./SavedBookViews";
import db from "../../API/db";
import search from "../../API/search";
import Modal from "../Home/Modal";
class Saved extends Component {
  state = {
    modal: {
      show: false,
      title: ""
    }
  };

  componentDidMount = () => this.handleSavedState();

  handleSavedState = async () => {
    const DBresults = await db.getAll();
    const savedBooks = await Promise.all(
      DBresults.data.map(async book => {
        const GGresults = await search.findOne(book.bookID);
        return GGresults.data;
      })
    );
    this.setState({
      data: savedBooks
    });
  };

  handleDeleteBook = async e => {
    e.preventDefault();
    const { id, title } = e.target.dataset;
    const results = await db.deleteOne(id);
    const newState = await this.state.data.filter(book => id !== book.id);
    this.setState({ data: newState, modal: { show: true, title: title } });
  };

  handleModalClose = () => {
    this.setState({
      modal: {
        show: false,
        title: ""
      }
    });
  };

  render() {
    const {
      data,
      modal: { show, title }
    } = this.state;

    return (
      <div className="container">
        <div className="my-4">
          <h4 className="text-center">Your Saved Books</h4>
        </div>
        <Modal
          show={show}
          handleModalClose={this.handleModalClose}
          title={`${title} is deleted.`}
          className={`text-danger`}
        />
        <div className="my-4 border p-2">
          <h5>Saved books</h5>
          {data ? (
            data.map(book => {
              return (
                <SaveBookView
                  key={book.id}
                  {...book}
                  handleDeleteBook={this.handleDeleteBook}
                />
              );
            })
          ) : (
            <h5>Loading books........ </h5>
          )}
        </div>
      </div>
    );
  }
}
export default Saved;