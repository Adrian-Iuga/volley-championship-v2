const axios = require('axios');

const getAll = async () => {
    var data = {};

    // await axios.get('https://jsonplaceholder.typicode.com/todos/1')
    //     .then((response) => {
    //         data = response.data;
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     });
    
    data.signupForm = "https://docs.google.com/forms/d/e/1FAIpQLScR9SBeleAmDDbybIEzpbTnkjxCcBI6Gs3x_n31C1EPABL5wg/viewform?usp=header";
    data.revolut = "https://revolut.me/adrian3fe"
    data.teams = require('../data/teams.json');
    data.score = require('../data/score.json');

    return data;
}


module.exports = {
    getAll
};