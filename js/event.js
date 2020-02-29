
let tblBody2 = $("#tblbody2");
let twoRow2 = "";
fetch('http://localhost:3000/api/v1/event',{
    headers:{
        'authorization': localStorage.getItem('Token')
    }
})
    .then(res => { return res.json() })
    .then(data => {
        if (data.name === "JsonWebTokenError") {
            alert('please login first')
            window.location.href = 'login.html'
        }
        else {
            console.log(data)
            data.map(events => {
                return twoRow2 += " <tr>" +
                    "<td>" + events.eventid + "</td>" +
                    "<td>" + events.eventname + "</td>" +
                    "<td>" + events.eventaddress + "</td>" +
                    "<td>" + events.eventstarttime + "</td>" +
                    "<td>" + events.eventendtime + "</td>	" +
                    "<td>" + events.eventdate + "</td>	" +
                    "<td><button type='del' id='button'  onclick='delete_element(" + events.eventid + ")' class='btn btn-danger'>Delete</button></td>" +
                    "<td><button type='del' id='uptbutton'  onclick='update_element(" + events.eventid + ")'>Update</button></td>" +
                    "</tr>";
            });
            $("#tbodytwo").html(twoRow2);
        }
    })

    .catch(error => {
        console.log(error);
    });
function update_element(eventid) {
    localStorage.setItem('eventid', eventid);
    window.location.href = 'updateevent.html'
}

function delete_element(eventid) {
    alert(eventid)
    console.log(eventid)
    fetch('http://localhost:3000/api/v1/event/' + eventid, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => { return res.json() })
        .then(data => {
            alert("Deleted !")
            window.location.href = 'admindashboard.html'
        })
        .catch(error => {
            console.log(error)
            alert("something error")
        });
}

//created by prabin 