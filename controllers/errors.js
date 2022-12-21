exports.get404 = (req, res, next) => {
  res.status(404).render("404", {
    pageTitle: "Page Not Found",
    path: "/not-found",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.get500 = (req, res, next) => {
  res.status(500).render("500", {
    pageTitle: "Something went wrong!",
    path: "/something-went-wrong",
    isAuthenticated: req.session.isLoggedIn,
  });
};
