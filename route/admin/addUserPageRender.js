// render add user page
// /admin/add/user
module.exports = (req, res) => {
    const { message } = req.query;
    res.render('admin/add-user', {
        msg: message
    })
}