import React from "react";
export default function BookViews({
  id,
  title,
  description,
  publishedDate,
  authors,
  thumbnail,
  smallThumbnail,
  subtitle,
  handleSaveBook,
  industryIdentifiers,
  previewLink
}) {
  return (
    <div className="card mb-3" style={{ maxWidth: "100%", maxHeight: "100%" }}>
      <div className="row no-gutters">
        <div className="col-md-12">
          <div className="card-body">
            <div className="float-left m-2">
              <img
                src={thumbnail || smallThumbnail || null}
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
                    title="Save Book"
                    className="btn btn-transparent pt-0 pr-0"
                    onClick={handleSaveBook}
                    data-id={id}
                  >
                    <i className="fas fa-save text-success" data-id={id} />
                  </button>
                </small>
                <small>
                  <a
                    href={previewLink}
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
              {industryIdentifiers
                ? industryIdentifiers.map(i => {
                    return (
                      <span key={i.identifier}>
                        <small className="text-muted">
                          {i.type}: {i.identifier}
                        </small>
                        <br />
                      </span>
                    );
                  })
                : null}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}