$(document).ready(function () {
    $('#button').click(function () {
        const firstname = $('#firstname').val();
        const lastname = $('#lastname').val();
        const email = $('#email').val();
        const address = $('#address').val();
        const phone = $('#phone').val();
        const password = $('#password').val();
        const repassword = $('#repassword').val();
        const gender = $('#gender').val();
        const field = $('#field').val();
        const date_of_birth = $('#date_of_birth').val();

        if (firstname == "" || lastname == "" || email == "" || address == "" || phone == "" || password == "" || date_of_birth == "") {
            alert("Please fill all field");
        }

        else if (password != repassword) {
            alert("Password and repassword doesnot match!!!")
        }
        else {
            let url = 'http://localhost:3000/api/v1/user';
            let data = {firstname: firstname, lastname: lastname, password: password, email: email, address: address, phone: phone, gender: gender, field: field, date_of_birth: date_of_birth };
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
                        alert("Registered Successfully")
                        window.location.href = "login.html"
                    } else {
                        alert("Phone number already registered")
                    }
                    console.log("req succ", data);
                })
                .catch(function (error) {
                    console.log("req failed", error);
                });
        }
    });
});

//created by prabin