"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const restify_1 = __importDefault(require("restify"));
const axios_1 = __importDefault(require("axios"));
require("dotenv/config");
const server = restify_1.default.createServer();
// Middleware
server.use(restify_1.default.plugins.queryParser());
/**
 * routes
 *
 */
// get city by latitude and longitude
server.get('/cities', (req, res, next) => {
    const { lat, lon } = req.query;
    const url = `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.API_KEY}&lat=${lat}&lon=${lon}`;
    axios_1.default.get(url)
        .then(response => {
        res.send(response.data);
        next();
    })
        .catch(err => {
        res.send(err);
        next();
    });
});
// get weather by city name
server.get('/city', (req, res, next) => {
    const { name } = req.query;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${process.env.API_KEY}`;
    console.log(url);
    axios_1.default.get(url)
        .then(response => {
        res.send(response.data);
        next();
    })
        .catch(err => {
        res.send(err);
        next();
    });
});
// get weather by id - return city details
server.get('/cities/:city_id', (req, res, next) => {
    const url = `http://api.openweathermap.org/data/2.5/weather?id=${req.params.city_id}&appid=${process.env.API_KEY}`;
    console.log(url);
    axios_1.default.get(url)
        .then(response => {
        res.send(response.data);
        next();
    })
        .catch(err => {
        res.send(err);
        next();
    });
});
// get weather by city by id
server.get('/cities/:city_id/weather', (req, res, next) => {
    const url = `http://api.openweathermap.org/data/2.5/weather?id=${req.params.city_id}&appid=${process.env.API_KEY}`;
    console.log(url);
    axios_1.default.get(url)
        .then(response => {
        res.send(response.data);
        next();
    })
        .catch(err => {
        res.send(err);
        next();
    });
});
server.listen(8080, () => {
    console.log('%s listening at %s', server.name, server.url);
});
//# sourceMappingURL=app.js.map