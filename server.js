const { createServer } = require('.');

const server = createServer({
 registryURL: 'https://registry.npmjs.org',  // The URL of the npm registry, defaults to the public registry 
 bowerBundle: '/bower.zip',                  // A special pathname for generating Bower bundles, defaults to "/bower.zip" 
 redirectTTL: 60,                            // The time (in seconds) to cache 302 responses, defaults to 0 
 autoIndex: true                             // Set false to disable generating index pages for directories 
})

server.listen(8080)