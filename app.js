const express = require("express");
const indexRouter = require("./routes/indexRouter");
const bookRouter = require("./routes/bookRouter");
const authorRouter = require("./routes/authorRouter");

const app = express();

app.use("/books", bookRouter);
app.use("/authors", authorRouter);
app.use("/", indexRouter);

// Every thrown error in the application or the previous middleware function calling `next`
// with an error as an argument will eventually go to this middleware function
app.use((err, req, res, next) => {
  console.error(err);
  // We can now specify the `err.statusCode` that exists in our custom error class and
  // if it does not exist it's probably an internal server error
  res.status(err.statusCode || 500).send(err.message);
});

const PORT = 3000;

app.listen(PORT, (error) => {
  // This is important! Without it, any startup errors will silently fail
  // instead of giving you a helpful error message.
  if (error) {
    throw error;
  }
  console.log(`My first Express app - listening on port ${PORT}`);
});
