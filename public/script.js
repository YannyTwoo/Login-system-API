loginButton = document.getElementById('logsubmit');
registerButton = document.getElementById('regsubmit')
getUserButton = document.getElementById('getusersubmit')
getUsersButton = document.getElementById('getuserssubmit')
deleteUserButton = document.getElementById('deletusersubmit')


const baseUrl = "http://localhost:5678"


//---------login---------
logusername = document.getElementById('logusername')
logpassword = document.getElementById('logpassword')

loginButton.addEventListener('click', (e) => {
    e.preventDefault();
    fetch({
        method: 'POST',
        url: 'http://localhost:5678',
        body: {
            "username": logusername.value,
            "password": logpassword.value
        }
    })
        .then((response) => response.json())
        .then(console.log(response))
})

//---------register---------


registerButton.addEventListener('click', (e) => {
    e.preventDefault();

    regusername = document.getElementById('regusername').value
    regpassword = document.getElementById('regpassword').value
    console.log(regusername + " " + regpassword)

    fetch(baseUrl + '/register', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "username": regusername,
            "password": regpassword
        })
    }).then((response) => response.json)
        .then(data =>{
            console.log(data.message)
        })

})




//---------get all users---------

userid = document.getElementById('getuserid');

getUserButton.addEventListener('click', (e) => {
    e.preventDefault();

    fetch({
        method: 'POST',
        url: 'http://localhost:5678',
        body: {
            userid: userid.value
        }
    })
        .then((response) => response.json())
        .then(console.log(response))

})


//---------get user through user id---------




//---------delete user---------




//---------------------------------