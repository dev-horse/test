const http = require('http');
const Koa = require('koa');
const cors = require('@koa/cors');
const serve = require('koa-static');
const { partBody } = require('./middlewares');
const routes = require('./routes');
const db = require('./db');

const app = new Koa();
const config = {
  port: 8081,
  host: 'localhost'
}

app
  .use(serve(__dirname + '/public'))
  .use(cors())
  .use(partBody)
  .use(routes.routes())
  .use(routes.allowedMethods());



const server = http.createServer(app.callback());
server.listen(config.port, config.host, async err => {
  try {
    if (err) {
      console.debug('Server listen error');
      console.error(err);
    }
    await db.connect();
    console.info(`Server start listen ${config.host}:${config.port}`);
    console.info(`Process PID: ${process.pid}`);
  } catch (error) {
    console.error(error)
    return process.exit(1);
  }
})

module.exports = server;