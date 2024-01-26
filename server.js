var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic('code')).listen(5000);
console.log("static file server is running at port 5000");