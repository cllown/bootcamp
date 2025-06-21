import http from 'http'
const PORT = 8000;

const server = http.createServer((res, req)=>{
   res.write('Hello world!');
   res.end;
});

server.listen(PORT, () => {
   console.log(`Server running on port ${PORT}`)
})