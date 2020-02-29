    let tblBody2 = $("#tblbody2");
    let twoRow2 = "";
    fetch('http://localhost:3000/api/v1/event',{
        headers:{
            'authorization': localStorage.getItem('Token')
        }
    })
        .then(res => { return res.json() })
        .then(data => {
            console.log(data)
            if(data.name==="JsonWebTokenError"){
                alert('please login first')
                window.location.href='login.html'
            }else{
            data.map(events => {
                return twoRow2 += " <tr>" +
                    "<td>" + events.eventid + "</td>" +
                    "<td>" + events.eventname + "</td>" +
                    "<td>" + events.eventaddress + "</td>" +
                    "<td>" + events.eventstarttime + "</td>" +
                    "<td>" + events.eventendtime + "</td>	" +
                    "<td>" + events.eventdate + "</td>	" +
                   "</tr>";
            });
        }
            $("#tbodytwo").html(twoRow2);
        })


        .catch(error => {
            console.log(error);
        });
    function update_element(eventid){
        localStorage.setItem('eventid',eventid);
        window.location.href= 'updateevent.html'
    }

    $(document).ready(function () {
        $("#logoutbtn3").click(function () {
            localStorage.removeItem('Token');
            localStorage.removeItem('eventid');
            localStorage.removeItem('userid');
            window.location.href='login.html'
        });
    });
    