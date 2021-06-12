$(document).ready(()=>{

    var socket = io();

    socket.on('connect', () =>{
        console.log("connected");
    })

    socket.on('chat', (data) => {
            $("#pool").append( data.username + ":" + data.message + "\n");
    });

    

    socket.on('UserSetting', (data) => {
        $("#welcome").html("Welcome " + data.username)
    })

    $("#setUser").on('click', (e)=> {
        e.preventDefault();
        let user = $("#user").val();
        
        socket.emit('setUser', {
            username: user
        })
    })

    $("#submit").on('click', (e)=>{ //e for event
        e.preventDefault();      //prevents the form form advancing
        let x = $("#message").val();
        let y = $("#user").val();


        socket.emit('message', {
            message: x,
            username: y
        });

        /*
        $.ajax({
            url: "/math",
            method: "POST",
            data: {
               x: x,
               y: y,
               method: method
            }
        })
        .done((data) =>{
            console.log(data);
            $("#results").html(x + " " + method + " " + y + " = " + data.number);
        })
        .fail((xhr)=>{
            console.log('error hmmmmm');
        });
            */
    })
})