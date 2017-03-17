// Koa dependencies
const Koa = require('koa')
const cors = require('koa-cors')
const app = new Koa()
app.use(cors)
// Socket.io server side
const io = require('socket.io')
// In memory database
const query = require('./query')
const { ifNotCreate, returnDB } = query

const server = app.listen(4000, () => {
  console.log('server started at 4000')
  console.log(returnDB())
})

const network = io.listen(server)

network.on('connection', socket => {
  console.log('Connected to %s', socket.id)
  socket.emit('results', returnDB())
  socket.on('poll', data => {
    socket.emit('results', ifNotCreate(data))
  })
})
