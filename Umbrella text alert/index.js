const { ENETDOWN } = require('constants');
const twilio = require('twilio');
const schedule = require('node-schedule');
const weather = require('weather-gov-api');
let forcast =[];
accSID = process.env.ACCSID;
authToken = process.env.AUTHTOKEN;

let client = new twilio(accSID, authToken);

schedule.scheduleJob('* * * * * *', function(){

    weather.getForecast('default', 34.9407341,-81.0333383)
    .then(data => {
                    //console.log(data.data.properties.periods)
                    forcast = data.data.properties.periods[2] //retreaves the second period aka the next day to check for rain
                    console.log(forcast.name);
                    var rainCheck = forcast.shortForecast.includes("Rain"); // if the short forcast has the word rain in it set raincheck to true
                    if( rainCheck == true) 
                    {  
                        console.log("lkjdfjklfjklefklje")
                        client.messages.create({
                        to:"+18034277283",
                        from:"+18039024666 ",
                        body:"Don't forget an umbrella before you leave"
                        })
                    }
                })
    .catch(err => console.log(err))
});



