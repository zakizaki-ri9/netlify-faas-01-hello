exports.handler = function(event, context, callback) {
    console.log("hello netlify functions.");
    callback(null, {
        statusCode: 200,
        body: "hello, world"
    });
}
