const getProfilePage = (req, res) => {
    res.render("index")
};
const getDashboardPage = (req, res) => {
    res.render("stuindex")
};
const getVotingPage = (req, res) => {
    res.render("insindex")
};
const getHomePage = (req, res) => {
    res.render("home", {
        link: "home",
    });
};
export { getDashboardPage, getHomePage, getProfilePage, getVotingPage };