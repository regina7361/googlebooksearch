import React, { Component, Fragment } from "react";
import InputGroup from "./InputGroup";
import BookViews from "./BookViews";
import Search from "../../API/search";
import Modal from "./Modal";
import db from "../../API/db";
class Home extends Component {
  state = {
    books: [],
    searchInput: "",
    modal: {
      show: false,
      title: ""
    }
  };
  handleSubmit = async event => {
    event.preventDefault();

    const results = await Search.findAll(event.target.searchInput.value);

    this.setState({
      books: results.data,
      searchInput: ""
    });
  };

  handleSaveBook = async event => {
    event.preventDefault();
    const { id } = event.target.dataset;
    const { books } = this.state;
    books.forEach(async book => {
      if (book.id !== id) return;
      const results = await db.saveOne(book);
      results &&
        this.setState({ modal: { show: true, title: results.data.title } });
    });
  };

  handleOnChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleModalClose = () => {
    this.setState({ modal: { show: false, title: "" } });
  };

  render() {
    const {
      books,
      modal: { show, title },
      searchInput
    } = this.state;
    return (
      <Fragment>
        <div className="container">
          <div className="my-4">
            <h5 className="text-center">Find Your Favorite Books Today</h5>
            <InputGroup
              handleSubmit={this.handleSubmit}
              handleOnChange={this.handleOnChange}
              value={searchInput}
            />
            <Modal
              show={show}
              handleModalClose={this.handleModalClose}
              title={`${title} is saved.`}
              className={`text-success`}
            />
          </div>
          <div className="my-4 border p-2">
            <h5>Results</h5>
            {books.map(book => {
              const volume = book.volumeInfo;
              if (volume.imageLinks) {
                const {
                  imageLinks: { thumbnail, smallThumbnail }
                } = volume;
                return (
                  <BookViews
                    id={book.id}
                    key={book.etag}
                    thumbnail={thumbnail}
                    smallThumbnail={smallThumbnail}
                    {...volume}
                    handleSaveBook={this.handleSaveBook}
                  />
                );
              } else {
                return <BookViews key={book.etag} {...volume} />;
              }
            })}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Home;