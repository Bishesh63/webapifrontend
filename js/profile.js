$(document).ready(function () {
    const name=$('#fname');
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
        
        name.val(data.data[0].firstname)
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
        console.log(data.data[0].firstname)
    })
    
    .catch(error => {
        console.log(error)
        alert("something error")
    });
});
