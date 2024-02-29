// Import essential libraries 
const express = require('express');
const favicon = require('serve-favicon')
const app = express();
const router = express.Router();
const homeController = require('./src/controllers/homeController');

//server.js
const cnad = require("@bitc/cnad");
cnad.config("/home/zhofcoxf/nodevenv/pakistan.filayouthsv.ro/18");

cnad.start();

app.use(express.static(__dirname + '/src'));
app.use(favicon(__dirname + '/src/img/favicon.ico'));

app.set('view engine', 'ejs');

// Setup essential routes 
router.get('/', homeController.home);

//add the router 
app.use('/', router);
app.listen(process.env.PORT || 3000, function () {
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
