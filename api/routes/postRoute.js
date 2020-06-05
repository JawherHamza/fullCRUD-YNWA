var express = require("express");
let router = express.Router();
var { add, getAll, remove, update } = require("../controllers/post");

router
  .post("/", (req, res) => {
    add(req.body)
      .then((doc) => res.status(201).json(doc))
      .catch((err) => res.json(err));
  })
  .get("/:section", (req, res) => {
    getAll(req.params.section)
      .then((doc) => res.status(200).json(doc))
      .catch((err) => res.status(400).json(err));
  })
  .delete("/:id", (req, res) => {
    remove(req.params.id)
      .then((result) => res.status(200).json(result))
      .catch((err) => res.status(400).json(err));
  })
  .put("/:id", (req, res) => {
    update(req.params.id, req.body)
      .then((result) => res.status(200).json(result))
      .catch((err) => res.status(400).json(err));
  });

module.exports = router;
