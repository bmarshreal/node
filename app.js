const http = require('http');
const fs = require('fs');


function rqListener(req,res) {

}

const server = http.createServer((req,res) => {
    const url = req.url;
    const method = req.method;
    if(url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Your Name please.</title></head>');
        res.write('<body><form action = "/message" method = "POST"><input name ="message" type="text"><button type = "submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
        // res.write()
        // res.write()
        // res.write()
        // res.write()
    }
    if(url === '/message' && method ==='POST'){
        fs.writeFileSync('message.txt', 'Dummy');
        res.writeHead(302, {"Location":  "/"});
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write("<h1>New Data! aha!</h1>")
    res.end();
});

server.listen(3000);