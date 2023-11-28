/*
const getProfilePage = (req, res) => {
    res.render("profile")
};
*/
const getDashboardPage = (req, res) => {
    res.render("dashboard")
};
const getVotingPage = (req, res) => {
    res.render("voting")
};
const getHomePage = (req, res) => {
    res.render("home", {
        link: "index",
    });
};
export { getDashboardPage, getHomePage, getVotingPage };