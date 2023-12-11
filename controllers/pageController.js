// BEFORE LOGIN (BL)
const getIndexPage = (req, res) => {
    res.render("index", {
        link:'index',
    });
};
const getBLVotingtPage = (req, res) => {
    res.render("beforelogvoting", {
        link: "beforelogvoting",
    });
};
const getContactPage = (req, res) => {
    res.render('contact', {
        link: 'contact',
    });
  };
// AFTER LOGIN (AL)
const getProjectsPage = (req, res) => {
    res.render("projects", {
        link: 'projects',
    });
};
const getALVotingPage = (req, res) => {
    res.render("afterlogvoting", {
        link: 'voting',
    });
};

const getProfilePage = (req, res) => {
    res.render("profile", {
        link: "profile",
    });
};
const getLogoutPage = (req, res) => {
    res.cookie('jwt','',{
        maxAge: 1,
    });
    res.redirect("/");
};

export {getIndexPage, getProjectsPage, getALVotingPage, getBLVotingtPage, getContactPage, getProfilePage, getLogoutPage};