let tblBody = $("#tblbody");
    let oneRow = "";
    fetch('http://localhost:3000/api/v1/user',{
        headers:{
            'authorization': localStorage.getItem('Token')
        }
    })
        .then(res => { return res.json() })
        .then(data => {
            if(data.name==="JsonWebTokenError"){
                alert('please login first')
                window.location.href='login.html'
            }
            else{
            console.log(data)
            data.map(users => {
                return oneRow += " <tr>" +
                    "<td>" + users.userid + "</td>" +
                    "<td>" + users.firstname + "</td>" +
                    "<td>" + users.lastname + "</td>" +
                    "<td>" + users.phone + "</td>" +
                    "<td>" + users.address + "</td>	" +
                    "<td>" + users.gender + "</td>	" +
                    "<td>" + users.field + "</td>	" +
                    "<td>" + users.date_of_birth + "</td>	" +
                    "<td><button type='del' id='button'  onclick='delete_user(" + users.userid + ")' class='btn btn-danger'>Delete</button></td>"
                "</tr>";
            });
            $("#tbodyone").html(oneRow);
        }
    })

    .catch(error => {
        console.log(error);
    });
function delete_user(userid) {
    alert(userid)
    console.log(userid)
        fetch('http://localhost:3000/api/v1/user/' +userid, {
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
        console.log(userid);
}
$(document).ready(function () {
    $("#logoutb").click(function () {
        localStorage.removeItem('Token');
        localStorage.removeItem('eventid');
        localStorage.removeItem('userid');
        window.location.href='login.html'
    });
});