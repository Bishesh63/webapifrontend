let tblBody = $("#tblbody");
    let oneRow = "";
    fetch('http://localhost:3000/api/v1/user')
        .then(res => { return res.json() })
        .then(data => {
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
                "</tr>";
            });
            $("#tbodyone").html(oneRow);
            // console.log(data);
        })

        .catch(error => {
            console.log(error);
        });
