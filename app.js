const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.listen(process.env.PORT || 3000);
app.get("/9/9", function(req,res){
    res.send({
        "uid": "999955183433",
        "name": "Rohit Pandey",
        "dob": "08-07-1985",
        "dobt": "A",
        "gender": "M",
        "phone": "2821096353",
        "email": "rpandey@mailserver.com",
        "building": "603/4 Vindyachal",
        "street": "7TH Road Raja Wadi",
        "locality": "Neelkanth Valley",
        "poname": "Ghatkopar (EAST)",
        "vtc": "Mumbai",
        "district": "Mumbai",
        "state": "Maharastra",
        "pincode": "110072"
        });
});
app.get("/9/2", function(req,res){
    res.send({
        "uid": "929990501894",
        "name": "Anisha Jay Kapoor",
        "gender": "F",
        "dob": "01-01-1982",
        "dobt": "V",
        "building": "2B 203",
        "street": "14 Main Road",
        "locality": "Jayanagar",
        "district": "Bangalore",
        "state": "Karnataka",
        "pincode": "110011"
        
        });
});
// {
// "uid": "999955183433",
// "name": "Rohit Pandey",
// "dob": "08-07-1985",
// "dobt": "A",
// "gender": "M",
// "phone": "2821096353",
// "email": "rpandey@mailserver.com",
// "building": "603/4 Vindyachal",
// "street": "7TH Road Raja Wadi",
// "locality": "Neelkanth Valley",
// "poname": "Ghatkopar (EAST)",
// "vtc": "Mumbai",
// "district": "Mumbai",
// "state": "Maharastra",
// "pincode": "110072"
// }
// {
// "uid": "929990501894",
// "name": "Anisha Jay Kapoor",
// "gender": "F",
// "dob": "01-01-1982",
// "dobt": "V",
// "building": "2B 203",
// "street": "14 Main Road",
// "locality": "Jayanagar",
// "district": "Bangalore",
// "state": "Karnataka",
// "pincode": "110011"

// }