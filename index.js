const http=require("http");
const express=require("express");
const app=express();
const path=require("path");

const {Server}=require("socket.io");
const server=http.createServer(app);
const io=new Server(server); 

//Socket.io
io.on("connection", (socket) => {
    socket.on('user-message',(message)=>{
        io.emit("message",message);
    });
})

app.use(express.static(path.join(__dirname,"/public")));

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname, "public", "index.html"));
})

server.listen(8080,()=>{
    console.log(`Server is listening at port : 8080`);
})