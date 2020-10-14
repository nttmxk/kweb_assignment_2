const axios = require('axios').default;

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;


const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    // res.end('Hello World');
    try { 
        axios.get('https://api.github.com/repos/nodejs/node')
        .then(function(response){
            const {stargazers_count, forks_count, open_issues_count} = response.data;
            res.end(`Stargazers: ${stargazers_count}\nForks: ${forks_count}\nOpen Issues: ${open_issues_count}`);
        });
    }catch(e){
        return 'Internal error issued: ${e.message}';
    }


});

/*
const createMessage = data =>{
    try{
        const checkedData=getData(data);
        return '${data}';
    } catch (e) {
        return 'Internal error issued: ${e.message}';
    }
}
*/
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
