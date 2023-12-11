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
    }); // EJS dosyasının adını belirtiyoruz
  };
// AFTER LOGIN (AL)
const getDashboardPage = (req, res) => {
    res.render("dashboard", {
        link: 'dashboard',
    });
};
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

export {getIndexPage, getProjectsPage, getDashboardPage, getALVotingPage, getBLVotingtPage, getContactPage, getProfilePage};