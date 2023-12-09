// BEFORE LOGIN
const getIndexPage = (req, res) => {
    res.render("index", {
        link:'index',
    });
};
const getBLVotingtPage = (req, res) => {
    res.render("blvoting", {
        link: "blvoting",
    });
};
/*
const getContactPage = (req, res) => {
    res.render("contact", {
        link: "contact",
    });
};
*/

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
export {getIndexPage, getProjectsPage, getDashboardPage, getALVotingPage};