const homeService = require('../services/homeService');


const home = async (req, res) => {
    var data = await homeService.getAll();
    res.render('pages/home', data);
}

module.exports = {
    home
};