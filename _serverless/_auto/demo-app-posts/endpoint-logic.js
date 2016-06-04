module.exports = {
  index: function(req, res) {
    res.status(200);
    res.json({ message: "ohai!!!"});
  }
};
