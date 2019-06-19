let MONGODB_URI = "";

if (process.env.NODE_ENV === "production") {
  MONGODB_URI = process.env.MONGODB_URI;
} else {
  MONGODB_URI =
    "mongodb://admin:abc123@ds231307.mlab.com:31307/heroku_rq45dtdx";
}

module.exports = MONGODB_URI;