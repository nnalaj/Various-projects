var totalVotes = 0
var data = []
var avgUp = 0
var avgDown = 0
var total = 0


let lnreader = require("readline").createInterface({
    input: require('fs').createReadStream("amazon_reviews_us_Mobile_Apps_v1_00.tsv")
});

lnreader.on('line', function(line){
    data = line.split("\t")
    totalVotes = data[9]
    totalUp = data[8]
    if(typeof totalUp != 'string' || totalUp.length < 3)
    {
        //console.log("we in there")
        
        avgUp += parseInt(totalUp) //total number of helpful votes
        avgDown += parseInt(totalVotes) - parseInt(totalUp) //total number of unhelpful votes
        total += parseInt(totalVotes)  //total votes
        //console.log(avgDown)
    }
})

lnreader.on('close', function(){
    console.log("end of file")
    console.log("average number of helpful votes: " + avgUp/total)
    console.log("average number of unhelpful votes: " + avgDown/total)
})


