let MONGODB_URI = "";

if (process.env.NODE_ENV === "production") {
  MONGODB_URI = process.env.MONGODB_URI;
} else {
  MONGODB_URI =
  "mongodb://localhost/reactreadinglist";
}

module.exports = MONGODB_URI;