const express = require('express');
const router = express.Router();

router.get('/',(req, res) => {
    res.render('index');
});

router.post('/math' , (req, res) => {
    let x=parseInt(req.body.x);
    let y=parseInt(req.body.y);
    let method = req.body.method;
    
    //res.setHeader('Content-Type', 'application.json' ) //without express
    //res.end(JSON.stringify({}))
    //res.json({number: x * y}); //w express
    
    if (method == "+")
    {
        res.json({number: x + y});
    }
    else if(method == "-")
    {
        res.json({number: x - y});
    }
    else if(method == "*")
    {
        res.json({number: x * y});
    }
    else if(method == "/")
    {
        res.json({number: x / y});
    }
    
    
    //res.render("index");
})

module.exports = router;