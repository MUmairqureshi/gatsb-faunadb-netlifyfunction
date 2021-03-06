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
