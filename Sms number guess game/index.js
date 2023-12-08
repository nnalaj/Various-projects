const express = require('express');
const app = express();
let port = 8000;
const bodyParser = require('body-parser');
const twilio = require('twilio');
const MessagingResponse = require('twilio/lib/twiml/MessagingResponse');
const { clear } = require('console');
let lastMsg = "";
let randnumber = 0;
let games = 0;
let ans = "";
let x = 0;
let guess= 0;

const accSID = "AC17b445e067ca5491f7d6f32c6e0a063a";
const authToken = "e38a59e9db77bcd395579e4c9b5d57d8";

const client = new twilio(accSID, authToken);

const msgRes = require("twilio").twiml.MessagingResponse; //used to format xml out

app.use(bodyParser.urlencoded({extended:false}));

app.post('/sms', function(request,response){
    const twiml = new MessagingResponse();                           //create twiml object to program with
    //twiml.message("hey lol");                                       //doesnt send message back but allows us to pass the message back to be formated 
    //console.log(request.body)

   if(!isNaN(request.body.Body))
   {
       //console.log("wut")
       guess = parseInt(request.body.Body, 10)
       console.log(guess)
   }
   else
   {
       x = request.body.Body.toLowerCase();
   }

        switch(x)
            {
                case 'start':
                    randnumber = math.random(10);
                    twiml.message("welcome to Hi-Lo. Take turns guessing the random number")
                    x = "";
                    break;
                case 'last':
                    twiml.message(lastMsg);
                    x = "";
                    break;
                case "y" || "Y":
                    randnumber = Math.random(10);
                    twiml.message("the number has been changed try to guess")
                    x = "";
                    break;
                case 'n':
                    ans = "n";
                    twiml.message("thanks for playing! \n games played: " + games)
                    x = "";
                    break;
                default: 
                    x = "";
                    lastMsg = request.body.Body;
            }

                if( guess >= randnumber)
                {
                    twiml.message("your geuss is over the number")
                    lastMsg = guess
                }
                else if(guess <= randnumber)
                {
                    twiml.message("your guess is below the number")
                    lastMsg = guess
                }
                else if(guess == randnumber)
                {
                    twiml.message("you got it!! would you like to play again y/n ? \n games played: " + games)
                }
                else{
                    lastMsg = request.body.Body;
                    twiml.message("last message set. type 'last' for the last message sent")
                }
    response.writeHead(200, {'Content-type' : 'text/xml'})          //lets the server know that returned data is xml document
    //console.log(twiml.toString());
    response.end(twiml.toString());
})

app.listen(port);

