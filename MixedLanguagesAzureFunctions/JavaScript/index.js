var request = require('request');

module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    request('http://www.google.com', function (error, response, body) {
        context.log('error:', error); // Print the error if one occurred
        context.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        // context.log('body:', body); // Print the HTML for the Google homepage.
      });

    if (req.query.name || (req.body && req.body.name)) {
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: "Hello " + (req.query.name || req.body.name)
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body"
        };
    }
    context.done();
};