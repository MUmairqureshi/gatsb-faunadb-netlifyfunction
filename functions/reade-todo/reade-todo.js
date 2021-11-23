


var faunadb = require('faunadb'),
  q = faunadb.query;

// const handler = async (event) => {
//   try {
//     // const subject = event.queryStringParameters.name || 'World'
//     var adminClient = new faunadb.Client({ secret: process.env.FAUNADB_ADMIN_SECRET });

//     var read = await adminClient.query(
//       q.Paginate(q.Match(q.Ref("indexes/all_todos")))

//       .then((response) => {
//         const todoRefs = response.data
//         console.log("Todo refs", todoRefs)
//         console.log(`${todoRefs.length} todos found`)
//         // create new query out of todo refs. http://bit.ly/2LG3MLg
//         const getAllTodoDataQuery = todoRefs.map((ref) => {
//           return q.Get(ref)
//         })





//     return {
//       statusCode: 200,
//       body: JSON.stringify({ message: `Hello ${subject}` }),

//     }}

//  .catch (error) {
//     return { statusCode: 500, body: error.toString() }
//   }
// }

// module.exports = { handler }





















// exports.handler = (event, context, callback) => {
//   console.log("Function `todo-read-all` invoked")
//   return client.query(q.Paginate(q.Match(q.Ref("indexes/all_todos"))))
//     .then((response) => {
//       const todoRefs = response.data
//       console.log("Todo refs", todoRefs)
//       console.log(`${todoRefs.length} todos found`)
//       // create new query out of todo refs. http://bit.ly/2LG3MLg
//       const getAllTodoDataQuery = todoRefs.map((ref) => {
//         return q.Get(ref)
//       })
//       // then query the refs
//       return client.query(getAllTodoDataQuery).then((ret) => {
//         return callback(null, {
//           statusCode: 200,
//           body: JSON.stringify(ret)
//         })
//       })
//     }).catch((error) => {
//       console.log("error", error)
//       return callback(null, {
//         statusCode: 400,
//         body: JSON.stringify(error)
//       })
//     })
// }















































// const faunadb = require('faunadb'),
//   q = faunadb.query;
// exports.handler = async (event, context) => {
//   try {

//     var adminClient = new faunadb.Client({ secret: process.env.FAUNADB_ADMIN_SECRET });

//     var result = await adminClient.query(
//       q.Get(q.Ref(q.Collection('messages'), '278747226935656965')));
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
























const faunadb = require('faunadb'),
  q = faunadb.query;
exports.handler = async (event, context) => {
  try {

    var adminClient = new faunadb.Client({ secret: process.env.FAUNADB_ADMIN_SECRET });

    var result = await adminClient.query(
      q.Get(q.Ref(q.Collection('messages'), '314694863101624905')));
    // q.Delete(
    //   q.Ref(q.Collection('messages'), '278747226935656965')
    // )

    console.log("result", result)
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `${result.data.detail}` }),

    }
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}

