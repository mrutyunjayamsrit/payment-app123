const express = require('express');
const bodyParser = require('body-parser');

// create express application
const app = express();

app.use(bodyParser.json());

// GET method
app.get('/',function(req,res){
    console.log('Home page');
    res.send('Hello Node');
});

var server=app.listen(3000,function() {
    console.log('SERVER STARTED')
});

// GET method
app.post('/paymentInfo',function(req,res){
    let CCNumbers = ['4111111111111111','378282246310005','4024007162415599']
    let ccn = req.body.ccn;
    let cvv = req.body.cvv;
    let paymentAmount = req.body.paymentAmount;
    
    console.log('Your ccn :' + ccn + ' '+" CVV: "+ cvv + ' '+ " payment amount: "+ paymentAmount);

    if(CCNumbers.includes(ccn) && paymentAmount > 0){
        let paymentResult= {
            out: "success"
        }
        res.json(paymentResult);
    } else {
        let paymentResult= {
            out: "failure"
        }
        res.json(paymentResult);
    }

});