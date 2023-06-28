const { log } = require('console');
const http = require('http');
const rooutes = require('./routes');
const routes = require('./routes');

const server = http.createServer((request, response) => {
    console.log(`Request method: ${request.method} | Endpoint: ${request.url} `);

    const route = routes.find((routeObj) => {
        routeObj.endpoint === request.url && routeObj.method === require.method
    });

    if (route) {
        route.handler(request, response);
    } else {
        response.writeHead(404, { 'Content-type': 'text/html' });
        response.end(`Canot ${request.method} ${request.url}`);
    }
});

server.listen(3000, () => console.log('🔥 Server started at http://localhost:3000'))



    // if (request.url === '/users' && request.method === 'GET') {
    //     UserController.listUsers(request, response)
    // } else {

    // }