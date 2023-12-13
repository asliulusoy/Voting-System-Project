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
  const getAboutPage = (req, res) => {
    res.render('about', {
        link: 'about',
    });
  };
  const getLogoutPage = (req, res) => {
    res.cookie('jwt','',{
        maxAge: 1,
    });
    res.redirect("/");
  };

export {getIndexPage,getBLVotingtPage, getContactPage, getLogoutPage,getAboutPage};