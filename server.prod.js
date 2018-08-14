/**
 * @file server.prod.js
 * @author lavas
 */

var LavasCore = require('lavas-core-vue');
var express = require('express');
var request = require('request');
var cors = require('cors')

process.env.NODE_ENV = 'production';

var app = express();

const corsOptions = {
    "origin": "*",
    "methods": "GET, POST",
    "credentials": true
}
app.use(cors(corsOptions))

let canRun = true
app.get('/weather/get', (req, res, next) => {
    if (!canRun) {
        res.json({
            status: 0,
            message: '保命中...'
        })
        return;
    }
    canRun = false
    let city = encodeURIComponent(req.query.city)
    request({
        url: `https://www.sojson.com/open/api/weather/json.shtml?city=${city}`,
        method: 'GET',
        json: true
    }, (error, response, body) => {
        res.json(body)
    })
    setTimeout(() => {
        canRun = true
    }, 3001)
})



var port = process.env.PORT || 3000;

var core = new LavasCore(__dirname);

core.init(process.env.NODE_ENV || 'production')
    .then(function () {
        core.runAfterBuild();
    })
    .then(function () {
        app.use(core.expressMiddleware());
        app.listen(port, function () {
            console.log('server started at localhost:' + port);
        });
    }).catch(function (err) {
        console.log(err);
    });

// catch promise error
process.on('unhandledRejection', function (err, promise) {
    console.log('in unhandledRejection');
    console.log(err);
    // cannot redirect without ctx!
});
