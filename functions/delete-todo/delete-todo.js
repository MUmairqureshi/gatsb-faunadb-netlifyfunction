
const faunadb = require('faunadb'),
  q = faunadb.query;
exports.handler = async (event, context) => {
  try {
    var adminClient = new faunadb.Client({ secret: process.env.FAUNADB_ADMIN_SECRET });
    var result = await adminClient.query(
      q.Map(q.Paginate(q.Match(q.Index('detail_by_title'))),
        q.Lambda(
          'detail', q.Get(q.Var('detail'))
        )))
    console.log("result", result)
    console.log("result", result.data.map(detail => detail.data.messages))
    return {
      statusCode: 200,
      body: JSON.stringify({ messages: `${result.data.detail}` }),
    }
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}

