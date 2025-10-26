const { Router } = require("express");

const indexRouter = Router();

indexRouter.get("/", (req, res) => res.send("Home page"));
indexRouter.get("/about", (req, res) => res.send("About page"));
indexRouter.get("/contact", (req, res) => res.send("Contact page"));
indexRouter.post("/contact", (req, res) => res.send("Update contact"));

module.exports = indexRouter;