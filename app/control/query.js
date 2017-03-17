const alasql = require('alasql')

alasql('CREATE TABLE cities (city string, rank number)')
alasql('INSERT INTO cities VALUES ("Philly", 0), ("São Paulo", 0), ("New York", 0), ("Boston", 0)')
// Query function
const ifNotCreate = data => {
  let q = alasql('SELECT * FROM cities WHERE city="' + data['city'] + '"')
  if (q.length <= 0) {
    alasql('INSERT INTO cities VALUES ("' + data['city'] + '", 1)')
  } else {
    alasql('UPDATE cities SET rank=rank+1 WHERE city="' + data.city + '"')
  }
  return alasql('SELECT * FROM cities')
}

const returnDB = () => alasql('SELECT * FROM cities')

module.exports = { db: alasql, ifNotCreate, returnDB }
