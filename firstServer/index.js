const http = require('http');

const fs  = require('fs');

const port = 8000;

function requestHandler(req,res){
    console.log("hi");
    res.writeHead(200,{"Content-Type":"text/html"})
    console.log(req.url);
    var pageName = '';
    switch(req.url){
        case '/':
              pageName = "./home.html";
              break;
        case '/about':
              pageName = "./about.html";
              break;
        case "/contact":
                pageName = "./contact.html";
                break;
        default : 
               pageName = "./404.html";
    }

    fs.readFile(pageName, function(err,data){
        if(err){
            console.log("something wrong");
            return false;
        }
        res.end(data);
    })
}

const app = http.createServer(requestHandler);



app.listen(port,function(err){
    if(err){
        console.log("Something wrong");
        return false;
    }
    console.log("server is connected successfully:",port);
})



