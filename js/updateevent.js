$(document).ready(function () {
    const uid = document.getElementById('eventid');
uid.innerHTML = localStorage.getItem('eventid');
    $('#updateevent').click(function () {
        const eventid=localStorage.getItem('eventid');
        const eventname = $('#eventname').val();
        const eventaddress = $('#eventaddress').val();
        const eventstarttime = $('#eventstarttime').val();
        const eventendtime = $('#eventendtime').val();
        const eventdate = $('#eventdate').val();
        console.log(eventid);
        console.log(eventaddress);
        console.log(eventstarttime);
        console.log(eventendtime);
        console.log(eventdate);

        if (eventname == "" || eventaddress == "" || eventstarttime == "" || eventendtime == "" || eventdate == "") {
            alert("Please fill all field");
        }
        else {
            let url = 'http://localhost:3000/api/v1/event';
            let data = {eventid:eventid,eventname: eventname, eventaddress: eventaddress,eventstarttime:eventstarttime,eventendtime:eventendtime, eventdate: eventdate };
            fetch(url, {
                method: 'put',
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(response => response.json())
                .then(function (data) {
                    if (data.status == "success") {
                        alert("Updated Successfully")
                        window.location.href = "viewevents.html"
                    } else {
                        alert("failed")
                    }
                    console.log("req succ", data);
                })
                .catch(function (error) {
                    console.log("req failed", error);
                });
        }
    });
});

$(document).ready(function () {
    const eventname = $('#eventname');
        const eventaddress = $('#eventaddress');
        const eventstarttime = $('#eventstarttime');
        const eventendtime = $('#eventendtime');
        const eventdate = $('#eventdate');
        const uid = document.getElementById('eventid');
        uid.innerHTML = localStorage.getItem('eventid');
console.log('http://localhost:3000/api/v1/getuser/' +localStorage.getItem('eventid'))
fetch('http://localhost:3000/api/v1/getevent/' +localStorage.getItem('eventid'),{
    method: "get",
    headers: {
        "Content-Type": "application/json"
    }
}).then(res => { return res.json() })
    .then(data => {
        eventname.val(data.data[0].eventname)
        eventaddress.val(data.data[0].eventaddress)
        eventstarttime.val(data.data[0].eventstarttime)
        eventendtime.val(data.data[0].eventendtime)
        eventdate.val(data.data[0].eventdate)
    })
    .catch(error => {
        console.log(error)
        alert("something error")
    });
});




