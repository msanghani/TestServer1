var http = require('http');

http.createServer(function(req,response){
	response.writeHead(200, {'content-type':'text/plain'});
	response.end('Hello World!!!!!!!');
}).listen(1337);
	
// console.log('Server is running over port 80');