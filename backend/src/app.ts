import restify from 'restify';
import axios from 'axios';
import 'dotenv/config';
import errors from 'restify-errors';

const server = restify.createServer();

// Middleware
server.use(restify.plugins.queryParser());

/**
 * routes
 *  
 */

// get city by latitude and longitude
server.get('/cities', (req, res, next) => {
  const { lat, lon } = req.query;
  const url = `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.API_KEY}&lat=${lat}&lon=${lon}`;
  axios.get(url)
    .then(response => {
      res.send(response.data);
      next();
    })
    .catch(err => {
      next(new errors.BadRequestError(err));
    });
});

// get weather by city name
server.get('/city', (req, res, next) => {
  const { name } = req.query;
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${process.env.API_KEY}`;
  console.log(url);
  axios.get(url)
    .then(response => {
      res.send(response.data);
      next(
        new errors.ResourceNotFoundError(
          `There is no city with the name of ${req.query.name}`
        )
      );
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
  axios.get(url)
    .then(response => {
      res.send(response.data);
      next();
    })
    .catch(err => {
      res.send(err);
      next(
        new errors.ResourceNotFoundError(
          `There is no found city with the id of ${req.params.city_id}`
        )
      );
    });
});

// get weather by city by id
server.get('/cities/:city_id/weather', (req, res, next) => {
  const url = `http://api.openweathermap.org/data/2.5/weather?id=${req.params.city_id}&appid=${process.env.API_KEY}`;
  console.log(url);
  axios.get(url)
    .then(response => {
      res.send(response.data);
      next();
    })
    .catch(err => {
      res.send(err);
      next(new errors.BadRequestError(err));
    });
});

server.listen(8080, () => {
  console.log('%s listening at %s', server.name, server.url);
});
