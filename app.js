const express = require("express");
const indexRouter = require("./routes/indexRouter");
const bookRouter = require("./routes/bookRouter");
const authorRouter = require("./routes/authorRouter");

const app = express();

app.use("/books", bookRouter);
app.use("/authors", authorRouter);
app.use("/", indexRouter);

const PORT = 3000;

app.listen(PORT, (error) => {
  // This is important! Without it, any startup errors will silently fail
  // instead of giving you a helpful error message.
  if (error) {
    throw error;
  }
  console.log(`My first Express app - listening on port ${PORT}`);
});
