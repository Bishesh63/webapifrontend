$(document).ready(function () {
    $("#button1").click(function () {
        const phone = $('#phone').val();
        const password = $('#password').val();
        console.log(phone)
        console.log(password)

        if (phone == "" || password == "") {
            alert("All fields are Required !")

        } else {
            let url = 'http://localhost:3000/api/v1/authuser';
            let data = { phone: phone, password: password };
            fetch(url, {
                method: 'post',
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(data)
                
            })
            
                .then(response => response.json())
                .then(function (data) {
                    console.log(data);
                    if (data.status == "true") {
                        localStorage.setItem('Token',data.accessToken)
                        localStorage.setItem('userid',data.userid)
                        alert("Successfull")
                        window.location.href = "dashboard.html"
                    } else {
                        alert("Incorrect credentials supplied !!")
                    }
                    console.log('Request succeeded with JSON response', data);
                })
                .catch(function (error) {
                    console.log('Request failed', error);
                });


        }
    });
});
