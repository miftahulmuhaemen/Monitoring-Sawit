var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    cors = require('cors'),
    path = require('path'),
    bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(express.static('./dist/your_app_name'));
app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname,'/dist/ng7-pre/index.html'));
});

var routes = require('./routes');
routes(app);
app.listen(port);
console.log("WEB API Running.......");
