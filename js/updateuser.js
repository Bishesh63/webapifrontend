
$(document).ready(function () {
    const uid = document.getElementById('userid');
uid.innerHTML = localStorage.getItem('userid');
    $('#update').click(function () {
        const userid=localStorage.getItem('userid');
        const firstname = $('#firstname').val();
        const lastname = $('#lastname').val();
        const email = $('#email').val();
        const address = $('#address').val();
        const phone = $('#phone').val();
        const password = $('#password').val();
        const gender = $('#gender').val();
        const field = $('#field').val();
        const date_of_birth = $('#date_of_birth').val();
        const imagename=$('imagename').val();
        console.log(userid);
        console.log(firstname);

        if (firstname == "" || lastname == "" || email == "" || address == "" || phone == "" || date_of_birth == "") {
            alert("Please fill all field");
        }
        else {
            let url = 'http://localhost:3000/api/v1/user';
            let data = {firstname: firstname, lastname: lastname,password:password,imagename:imagename, email: email, address: address, phone: phone, gender: gender, field: field, date_of_birth: date_of_birth, userid:userid };
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
                        window.location.href = "dashboard.html"
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

$(document).ready(function () {
    const firstname = $('#firstname');
    const lastname = $('#lastname');
    const email = $('#email');
    const address = $('#address');
    const phone = $('#phone');
    const password = $('#password');
    const gender = $('#gender');
    const field = $('#field');
    const date_of_birth = $('#date_of_birth');
    const uid = document.getElementById('userid');
    uid.innerHTML = localStorage.getItem('userid');
console.log('http://localhost:3000/api/v1/getuser/' +localStorage.getItem('userid'))
fetch('http://localhost:3000/api/v1/getuser/' +localStorage.getItem('userid'),{
    method: "get",
    headers: {
        "Content-Type": "application/json"
    }
}).then(res => { return res.json() })
    .then(data => {
        firstname.val(data.data[0].firstname)
        lastname.val(data.data[0].lastname)
        email.val(data.data[0].email)
        address.val(data.data[0].address)
        phone.val(data.data[0].phone)
        password.val(data.data[0].password)
        address.val(data.data[0].address)
        phone.val(data.data[0].phone)
        gender.val(data.data[0].gender)
        field.val(data.data[0].field)
        date_of_birth.val(data.data[0].date_of_birth)
    })
    .catch(error => {
        console.log(error)
        alert("something error")
    });
});


