
import React from "react";
function SavedBookViews({
  id,
  volumeInfo: {
    infoLink,
    title,
    imageLinks: { thumbnail },
    description,
    authors,
    publishedDate,
    subtitle,
    industryIdentifiers
  },
  handleDeleteBook
}) {
  return (
    <div className="card mb-3" style={{ maxWidth: "100%", maxHeight: "100%" }}>
      <div className="row no-gutters">
        <div className="col-md-12">
          <div className="card-body">
            <div className="float-left m-2">
              <img
                src={thumbnail || null}
                className="img-thumbnail"
                alt={title}
              />
            </div>
            <h5 className="card-title text-center">
              {title}
              <span className="float-right">
                <small>
                  <button
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Delete Book"
                    className="btn btn-transparent pt-0 pr-0"
                    onClick={handleDeleteBook}
                    data-id={id}
                    data-title={title}
                  >
                    <i
                      className="fas fa-trash text-danger"
                      data-title={title}
                      data-id={id}
                    />{" "}
                  </button>
                </small>
                <small>
                  <a
                    href={infoLink}
                    rel="noopener noreferrer"
                    target="_blank"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="View Book"
                    className="btn btn-transparent pt-0 pr-0"
                  >
                    <i className="fas fa-eye text-warning" />
                  </a>
                </small>
              </span>
            </h5>
            <p className="card-text">
              <small className="text-muted">{subtitle}</small>
            </p>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                {authors}, {publishedDate}
              </small>
              <br />
              {industryIdentifiers ? (
                industryIdentifiers.map(i => {
                  return (
                    <span key={i.identifier}>
                      <small className="text-muted">
                        {i.type}: {i.identifier}
                      </small>
                      <br />
                    </span>
                  );
                })
              ) : (
                <small> ID NOT FOUND</small>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SavedBookViews;