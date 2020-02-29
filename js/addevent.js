$(document).ready(function () {
    $('#event').click(function () {
        const eventname = $('#eventname').val();
        const eventaddress = $('#eventaddress').val();
        const eventstarttime = $('#eventstarttime').val();
        const eventendtime = $('#eventendtime').val();
        const eventdate = $('#eventdate').val();
        if (eventname == "" || eventaddress == "" || eventstarttime == "" || eventendtime == "" || eventdate == "" ) {
            alert("Please fill all field");
        }
        else {
            let url = 'http://localhost:3000/api/v1/event';
            let data = {eventname: eventname, eventaddress: eventaddress, eventstarttime: eventstarttime, eventendtime: eventendtime, eventdate: eventdate};
            fetch(url, {
                method: 'post',
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(response => response.json())
                .then(function (data) {
                    if (data.status == "success") {
                        alert("added Successfully")
                        window.location.href = "admindashboard.html"
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


