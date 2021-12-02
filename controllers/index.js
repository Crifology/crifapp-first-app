const sendPrivatePage = (req, res, next) => {
    res.render('private-page');
};

module.exports = {
    sendPrivatePage
}