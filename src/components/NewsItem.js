import React from "react";

const NewsItem = (props) => {
  let { title, discription, imgUrl, newsUrl, author, date, source } = props;
  return (
    <div>
      <div className="card">
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark text-white">
          {source}
        </span>
        <img className="card-img-top" src={imgUrl} alt="" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{discription}</p>
          <p className="card-text">
            <small className="text-muted">
              By {!author ? "Unknown" : author} on{" "}
              {new Date(date).toUTCString()}
            </small>
          </p>
          <a
            href={newsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;