document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        signUp();
    }
})

let allUsers = JSON.parse(localStorage.getItem("noters")) || [];


// localStorage.setItem('users', JSON.stringify(allUsers)) || []


if (localStorage.users) {
    let retrieved = JSON.parse(localStorage.getItem('allUsers')) || [];
    console.log(retrieved);
    allUsers == retrieved
} else {
    allUsers == []
}


// localStorage.users = JSON.stringify(allUsers) || [];

const toast = (text, background, color, position = 'right') => {
    Toastify({
        text,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top",
        position,
        stopOnFocus: true,
        style: {
            background,
            color,
        },
        onClick: function () { }
    }).showToast();
}

// const toSignIn = () => {
//     setTimeout(() => {
//         window.location.href = 'signin.html';
//     }, 1500);
//     toSignIn();

// }



const signUp = () => {
    if (password.value !== confirmPass.value) {
            toast('Password mismatch ', '#f00', '#fff')
            document.getElementById('confirmPass').value = '';
        } else{
            console.log('correct');
            
        }

    if (fullName.value === '' || email.value === '' || password.value === '' || confirmPass.value === '') {
        toast('Not that quick 😁, please fill in the inputs', '#f00', '#fff')
    } else {
        sub.innerHTML = 'Signing up...'
        setTimeout((() => {
            sub.innerHTML = 'Sign Up';
        }), 1000)

        const fName = document.getElementById('fullName').value;
        const mail = document.getElementById('email').value;
        const pass = document.getElementById('password').value;
        const confPass = document.getElementById('confirmPass').value;

        const user = { fName, mail, pass };
        // allUsers.push(user);
        // console.log(allUsers);
        // localStorage.setItem("noters", JSON.stringify(allUsers));
        // console.log(localStorage.getItem("users"));
        

        let found = allUsers.find(eachUser => eachUser.mail === mail)
        console.log(found);

        if (found === undefined) {
            allUsers.push(user);
            toast('Sign up successful, redirecting to sign in...', '#00f', '#fff', 'left');
            console.log(allUsers);

            // Clear input fields
            document.getElementById('email').value = '';
            document.getElementById('password').value = '';
            document.getElementById('confirmPass').value = '';

            localStorage.noters = JSON.stringify(allUsers)

            setTimeout(() => {
                window.location.href = 'loaderlog.html';
            }, 1500);

        } else {
            console.log('User already exists, redirecting to sign in...')
            toast('User already exists', '#f00', '#fff')
            setTimeout(() => {
                window.location.href = 'loaderlog.html';
            }, 1500);
        
        }
    }
}

