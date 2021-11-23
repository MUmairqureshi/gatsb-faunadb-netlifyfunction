

const faunadb = require('faunadb'),
  q = faunadb.query;
exports.handler = async (event, context) => {
  try {
    var adminClient = new faunadb.Client({ secret: process.env.FAUNADB_ADMIN_SECRET ,
      domain : "db.fauna.com"
    });
    const result = await client.query(
    //   q.Map(q.Paginate(q.Match(q.Collection('messages'))),
    //     q.Lambda(
    //       'detail', q.Get(q.Var('detail'))
    //  ) ))

    query.Map(query.Paginate(query.Documents(query.Collection('messages'))),
    query.Lambda((detail) => query.Get(detail)
    ))
        )
        //  q.Get(q.Ref(q.Collection('message')));
    // console.log("result", result)
    // console.log("result", result.data.map(detail => detail.data.messages))
    // return {
    //   statusCode: 200,
    //   body: JSON.stringify({ messages: `${result.data.detail}` }),
    // }

    // return result.data.map(({data})=>{
      return {
    //    url: data.url,
    //    name : data.name
      body: JSON.stringify(result),
      }
//    })
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}
