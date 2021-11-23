



// const faunadb = require('faunadb'),
// q = faunadb.query;
// exports.handler = async (event, context) => {
// try {

//   var adminClient = new faunadb.Client({ secret: process.env.FAUNADB_ADMIN_SECRET });

//   var result = await adminClient.query(
// //    q.Get(q.Ref(q.Collection('messages'), `${id}`)));
//   // q.Delete(
//   //   q.Ref(q.Collection('messages'), '278747226935656965')
//   // )


//   q.Map(  q.Paginate(q.Match(q.Index('detail_by_title'))),
//   q.Lambda(
//     'detail', q.Get(q.Var('detail'))
// )))

//   console.log("result",  result.data.map(x => x.data.message))
//   return {
//     statusCode: 200,
//     body: JSON.stringify({ message: `${result.data.detail}` }),

//   }
// } catch (err) {
//   return { statusCode: 500, body: err.toString() }
// }
// }






































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






























var faunadb = require('faunadb'),
  q = faunadb.query;
exports.handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }
  try {
    const messageBody = JSON.parse(event.body);
    var adminClient = new faunadb.Client({ secret: process.env.FAUNADB_ADMIN_SECRET });

    const result = await adminClient.query(
      q.Create(
        q.Collection('messages'),
        { data: { detail: messageBody.message } },
      ),
      // q.Delete(
      //           q.Ref(q.Collection('messages'), '278747226935656965')
      //         )

    )
    return {
      statusCode: 200,
      body: JSON.stringify({ message: result.ref.id }),
    }
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}
