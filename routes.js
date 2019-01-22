const Router = require('koa-router');
const db = require('./db');

const router = new Router();
router
  .get('/members', async (ctx, next) => {
    try {
      let {
        page = 1,
        limit = 10,
        ...q
      } = ctx.query;
      page = Math.max(1, Number.parseInt(page));
      limit = Math.max(0, Number.parseInt(limit));

      let query = 'SELECT * FROM users';
      let countQuery = 'SELECT count(*) FROM users';
      if (Object.keys(q).length) {
        const strQuery = [];
        Object.keys(q).forEach(key => {
          const str = key.toLowerCase();
          let value = `${str} = '${q[key]}'`;
          if (str === 'age') {
            if (q[key] && q[key].match(/^\d+$/g)) {
              const age = Number.parseInt(q[key]);
              value = `${str} = ${age}`;
            }
          }
          strQuery.push(value);
        });
        query = `${query} WHERE ${strQuery.join(' and ')}`;
        countQuery = `${countQuery} WHERE ${strQuery.join(' and ')}`;
      }

      const [
        members,
        count,
      ] = await Promise.all([
        db.query(`${query} LIMIT ${limit} OFFSET ${page - 1}`),
        db.query(countQuery),
      ])

      return ctx.body = {
        status: 200,
        message: 'message',
        meta: {
          total: Number.parseInt(count.rows[0]['count']),
          perPage: limit,
          currentPage: page,
        },
        data: members.rows,
      }
    } catch (error) {
      throw error;
    }
  })
  .get('/members/:id', async (ctx, next) => {
    try {
      const { id } = ctx.params;
      const members = await db.query(`SELECT * FROM users where id=${id}`);
      if (!members.rowCount) {
        return ctx.throw(404);
      }
      return ctx.body = members.rows[0]
    } catch (error) {
      throw error;
    }
  })




module.exports = router;