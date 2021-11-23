

// // Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
// const faunadb = require('faunadb'),
//    q = faunadb.query;

// const handler = async (event) => {
//   try {
//   var adminClient = new faunadb.Client({ secret: process.env.FAUNADB_ADMIN_SECRET });
//   //  const subject = event.queryStringParameters.name || 'World'
//   var result = await adminClient.query(
//           q.Get(q.Ref(q.Collection('messages'), '278747226935656965')));
//         console.log("result", result)
//     return {
//       statusCode: 200,
//       body: JSON.stringify({ messages: "meg" }),
//       // // more keys you can return:
//       // headers: { "headerName": "headerValue", ... },
//       // isBase64Encoded: true,
//     }
//   } catch (error) {
//     return { statusCode: 500, body: error.toString() }
//   }
// }

// module.exports = { handler }










// const faunadb = require('faunadb'),
//   q = faunadb.query;
// exports.handler = async (event, context) => {
//   try {

//     var adminClient = new faunadb.Client({ secret: process.env.FAUNADB_ADMIN_SECRET });

//     var result = await adminClient.query(
//       q.Get(q.Ref(q.Collection('messages'), '314694863101624905')));
//     // q.Delete(
//     //   q.Ref(q.Collection('messages'), '278747226935656965')
//     // )

//     console.log("result", result)
//     return {
//       statusCode: 200,
//       body: JSON.stringify({ message: `${result.data.detail}` }),

//     }
//   } catch (err) {
//     return { statusCode: 500, body: err.toString() }
//   }
// }









//    q.Get(q.Ref(q.Collection('messages'), `${id}`)));
// q.Delete(
//   q.Ref(q.Collection('messages'), '278747226935656965')
// )
//  detail_by_title
//  `messages${id}`
//q.Get(q.detail('messages${id}'))









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


// const faunadb = require("faunadb"),
//   q = faunadb.query

// //require("dotenv").config()

// exports.handler = async (event, context) => {
//   try {
//     const client = new faunadb.Client({
//       secret: process.env.FAUNADB_ADMIN_SECRET,
//     })
//     let result = await client.query(
//       q.Map(
//         q.Paginate(q.Match(q.Index('detail_by_title'))),
//         q.Lambda("detail", q.Get(q.Var("detail")))
//       ))
//     console.log("all the entries " + result.data.map(x => x.data.message))
//     return {
//       statusCode: 200,
//       body: JSON.stringify({messages: `${result.data.detail}`}),
//     }
//   } catch (error) {
//     return { statusCode: 400, body: error.toString() }
//   }
// }




// // result.ref.id


