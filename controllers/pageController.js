
const getIndexPage = (req, res) => {
    res.render("index", {
        link:'index',
    });
};

const getDashboardPage = (req, res) => {
    res.render("dashboardindex", {
        link: 'dashboard',
    });
};
/*
const getVotingPage = (req, res) => {
    res.render("voting")
};
const getHomePage = (req, res) => {
    res.render("home", {
        link: "home",
    });
};
*/
export {getIndexPage, getDashboardPage};