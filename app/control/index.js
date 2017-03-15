// Koa dependencies
const Koa = require('koa')
const cors = require('koa-cors')
const app = new Koa()
// Socket.io server side
const io = require('socket.io')
// In memory database
const db = []

app.use(cors)
const server = app.listen(4000, () => console.log('server started at 4000'))

const network = io.listen(server)

network.on('connection', socket => {
  console.log('Connected to %s', socket.id)
  const data = () => {
    const interval = db.length > 0 ? db.length - 1 : null
    if (interval === null) return '{}'
    else JSON.stringify(db[interval])
  }
  network.emit('results', data())
  socket.on('poll', data => {
    console.log(data)
  })
})
