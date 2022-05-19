var accArray, woArray, meArray;
var x = 1;
accArray = ["accitems1.html","accitems2.html"];
woArray = ["womenitems1.html","womenitems2.html"];
meArray = ["mensitems1.html","mensitems2.html"];

function nextPage() {

    document.getElementById("shopFrame").src=accArray[0];

    //document.getElementById("shopFrame").src=woArray[1];
 
    //document.getElementById("shopFrame").src=meArray[1];

    document.getElementById("pageCounter").innerHTML= "Page 2 of 2";
}

function prevPage() {
 
    document.getElementById("shopFrame").src=accArray[1];

    //document.getElementById("shopFrame").src=woArray[0];

    //document.getElementById("shopFrame").src=meArray[0];

    document.getElementById("pageCounter").innerHTML= "Page 1 of 2";
}