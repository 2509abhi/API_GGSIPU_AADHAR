const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.listen(process.env.PORT || 3000);
app.get("/999955183433", function(req,res){
    res.send({
        "uid": "999955183433",
        "name": "Rohit Pandey",
        "dob": "08-07-2002",
        "gender": "M",
        "phone": "2821096353",
        "Address": "603/4 Vindyachal, Delhi"
        });
});
app.get("/929990501894", function(req,res){
    res.send({
        "uid": "929990501894",
        "name": "Anisha Jay Kapoor",
        "dob": "01-01-2001",
        "gender": "F",
        "phone": "9921096353",
        "Address": "2B 203 Vidyapur, Jharkand"
        });
});
app.get("/929274601895", function(req,res){
    res.send({
        "uid": "929274601895",
        "name": "Anish Jain",
        "dob": "01-10-2003",
        "gender": "M",
        "phone": "7821096353",
        "Address": "32B West Delhi Dwarka, Delhi"
        });
});
app.get("/929990501366", function(req,res){
    res.send({
        "uid": "929990501366",
        "name": "Ansh Kapoor",
        "dob": "10-01-2001",
        "gender": "M",
        "phone": "9824096353",
        "Address": "2B 203 North East Delhi, Delhi"
        });
});
app.get("/929990502345", function(req,res){
    res.send({
        "uid": "929990502345",
        "name": "Nisha Gupta",
        "dob": "09-09-2002",
        "gender": "F",
        "phone": "8821866353",
        "Address": "80 Vidyapur, Uttar pradesh"
        });
});
app.get("/",function(req,res){
    res.write("Free Aadhar Api\n");
    res.write("You use Aadhar Api by: 'sitename/uid'\n");
    res.write("uid: 999955183433,929990502345,929990501366,929274601895,929990501894");
    res.send();
});