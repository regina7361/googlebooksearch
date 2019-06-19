import React from "react";

export default function InputGroup({ handleSubmit, handleOnChange, value }) {
  return (
    <div className="border p-2">
      <form onSubmit={handleSubmit}>
        <div className="input-group my-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              <i className="fas fa-book" />
            </span>
          </div>
          <input
            type="text"
            name="searchInput"
            className="form-control"
            placeholder="Books, Authors, Descriptions, ISBNs ... "
            aria-label="Books, Authors, Descriptions, ISBNs ..."
            aria-describedby="basic-addon1"
            value={value}
            onChange={handleOnChange}
            required
          />
          <input
            type="submit"
            className="btn btn-secondary float-right"
            value="Search"
          />
        </div>
      </form>
    </div>
  );
}