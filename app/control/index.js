// Koa dependencies
const Koa = require('koa')
const cors = require('koa-cors')
const app = new Koa()
app.use(cors)
// Socket.io server side
const io = require('socket.io')
// In memory database
const alasql = require('alasql')
alasql('CREATE TABLE cities (city string, rank number)')
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



const server = app.listen(4000, () => console.log('server started at 4000'))

const network = io.listen(server)

network.on('connection', socket => {
  console.log('Connected to %s', socket.id)
  const data = () => {
  }
  network.emit('results', data())
  socket.on('poll', data => {
    console.log(ifNotCreate(data))
  })
})
