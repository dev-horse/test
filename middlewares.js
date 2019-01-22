const koaBody = require('koa-body');


exports.partBody = koaBody({
  jsonLimit: '2mb',
  multipart: true,
  onError: (err, ctx) => {
    console.error('part body error', err.stack);
    ctx.throw(err.message, 442);
  }
});