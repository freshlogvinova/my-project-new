const promise = require('bluebird');

const options = {
  // Initialization Options
  promiseLib: promise
};

const cn = {
  host: 'localhost',
  port: 5432,
  database: 'atom_db',
  user: 'atom',
  password: 'atom'
};

const pgp = require('pg-promise')(options);
const db = pgp(cn);

// add query getAllDevelopers
function getAllDeveloper(req, res, next) {
  db.any('select * from developers')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL puppies'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function setDeveloper(req, res, next) {
  db.none('insert into developers(name) values(\'Victor\')')
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Inserted one puppy'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

module.exports = {
  getAllDeveloper: getAllDeveloper,
  setDeveloper: setDeveloper
};
