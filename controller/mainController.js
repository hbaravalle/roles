async function index(req, res) {
  console.log(res.locals);
  return res.render("home");
}

async function create(req, res) {
  return res.render("register");
}

module.exports = {
  index,
  create,
};
