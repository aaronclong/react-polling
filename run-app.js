const chalk = require('chalk')
const repl = require('repl')
const spawn = require('child_process').spawn

const std = (callback, child) => {
  child.stdout.on('data', data => {
    callback(data.toString('utf8'))
  })
}

// Console.log Callback
const log = string => {
  return data => { console.log(string + ':', data) }
}

// Run Back End
const createBackEnd = () => {
  try {
    const child = spawn('npm', ['run', 'webserver'], { cwd: 'app/control' })
    std(log('Back End'), child)
    return child
  } catch (e) {
    console.log('There was an error', chalk.bold.red(e))
    return null
  }
}

// Run Front End
const createFrontEnd = () => {
  try {
    const child = spawn('npm', ['start'], { cwd: 'app/view' })
    std(log('Front End'), child)
    return child
  } catch (e) {
    console.log('There was an error', chalk.bold.red(e))
    return null
  }
}

let backEnd = createBackEnd()
let frontEnd = createFrontEnd()

function restart (service) {
  if (service) {
    switch (service) {
      case 'back':
        backEnd.kill()
        backEnd = createBackEnd()
        break
      case 'front':
        frontEnd.kill()
        frontEnd = createFrontEnd()
        break
    }
  } else {
    backEnd.kill()
    backEnd = createBackEnd()
    frontEnd.kill()
    frontEnd = createFrontEnd()
  }
}

function end () {
  backEnd.kill()
  frontEnd.kill()
  process.exit()
}

const r = repl.start({prompt: '> '})

r.context.restart = restart
r.context.end = end
