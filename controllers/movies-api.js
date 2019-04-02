// CRUD acroynm  is equivalent to the following four handlers.
// These map to and idea of something you do with database

// POST = Create

function create(req, res) {
  res.json({ message: "You created" });
}

// GET = Retrieve
function retrieveAll(req, res) {
  res.json({ message: "You retrieved all" });
}

// PUT = Update
function update(req, res) {
  res.json({ message: "You updated" });
}

// DELETE = Delete

function deleteOne(req, res) {
  res.json({ message: "You deleted" });
}
