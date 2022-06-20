import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date } = props;
  return (
    <div className="my-3">
      <div className="card text-white bg-dark">
        <img
          style={{ height: "15em" }}
          src={
            !imageUrl
              ? "https://cdn.pixabay.com/photo/2014/05/21/22/28/old-newspaper-350376_960_720.jpg"
              : imageUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">
            {!title
              ? "Not Available , click on read more to get info"
              : title.slice(0, 50)}
            ...
          </h5>
          <p className="card-text">
            {!description
              ? "Not Available , click on read more to get info"
              : description.slice(0, 50)}
            ...
          </p>
          <p className="card-text">
            <small className="text-muted">
              By {!author ? "Unknown" : author}
              <br />
            </small>
            <small className="text-muted">
              {" "}
              {!date ? "Unknown" : new Date(date).toGMTString()}
            </small>
          </p>
          <a
            href={newsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-secondary"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
