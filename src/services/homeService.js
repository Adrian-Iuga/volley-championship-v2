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
    
    data.signupForm = "https://docs.google.com/forms/d/e/1FAIpQLSeH2Ux1YiuAFFdMWATV1r2P00c0K4simgl-5p74Y33TjDPhfg/viewform";
    data.teams = require('../data/teams.json');
    data.score = require('../data/score.json');

    return data;
}


module.exports = {
    getAll
};