// BEFORE LOGIN
const getIndexPage = (req, res) => {
    res.render("index", {
        link:'index',
    });
};
const getBLVotingtPage = (req, res) => {
    res.render("voting", {
        link: "voting",
    });
};
export const getContactPage = (req, res) => {
    res.render('contact'); // EJS dosyasının adını belirtiyoruz
  };
// AFTER LOGIN (AL)
const getDashboardPage = (req, res) => {
    res.render("dashboardindex", {
        link: 'dashboard',
    });
};
const getProjectsPage = (req, res) => {
    res.render("projects", {
        link: 'projects',
    });
};
/*
const getProfilePage = (req, res) => {
    res.render("profile", {
        link: "profile",
    });
};
*/
/*
const getProfilePage = (req, res) => {
    res.render("projects", {
        link: "projects",
    });
};
*/
const getALVotingPage = (req, res) => {
    res.render("voting")
};
export {getIndexPage, getProjectsPage, getDashboardPage, getALVotingPage};