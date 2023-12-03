
const getIndexPage = (req, res) => {
    res.render("index")
};

const getDashboardPage = (req, res) => {
    res.render("dashboardindex")
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