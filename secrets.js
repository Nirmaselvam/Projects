
import bodyParser from "body-parser";
import express from "express";
import {dirname} from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port=3000;
var password ="";

app.use(bodyParser.urlencoded({extended:true}));

function passwordverify(req,res,next){
    password = req.body.password;
    next();
}

app.use(passwordverify);


app.get ("/",(req,res)=>{
    res.sendFile(__dirname +"/public/index.html");
})

app.post("/check",(req,res)=>{
if ("ILoveProgramming"=== password)
 res.sendFile (__dirname + "/public/secret.html");
else
res.sendFile(__dirname +"/public/index.html");

});

app.listen(port,()=>{
console.log(`Listen port ${port}.`)
});
