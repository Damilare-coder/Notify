document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        signUp();
    }
})

const allUsers = [];

// localStorage.users = JSON.stringify(allUsers) || [];
// localStorage.setItem('users', JSON.stringify(allUsers));

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

const signUp = () => {

    if (fullName.value === '' || email.value === '' || password.value === '' || confirmPass.value === '') {
        toast('Not that quick 😁, please fill in the inputs', '#f00', '#fff')
        if (password.value !== confirmPass.value) {
            toast('Password mismatch ', '#f00', '#fff')
            document.getElementById('confirmPass').value = '';
        }

    } else {
        sub.innerHTML = 'Signing up...'
        setTimeout((() => {
            sub.innerHTML = 'Sign Up';
        }),1000) 

        const fName = document.getElementById('fullName').value;
        const mail = document.getElementById('email').value;
        const pass = document.getElementById('password').value;
        const confPass = document.getElementById('confirmPass').value;

        const user = { fName, mail, pass };

        let found = allUsers.find(eachUser => eachUser.mail == mail)
        // console.log(found);
        if (found == undefined) {
            allUsers.push(user);
            console.log(allUsers);
            toast('Signing up...', '#00f', '#fff', 'left');

            // Clear input fields
            document.getElementById('email').value = '';
            document.getElementById('password').value = '';
            document.getElementById('confirmPass').value = '';

            // localStorage.users = JSON.stringify(allUsers)
            localStorage.setItem("users", JSON.stringify(allUsers));

            setTimeout(() => {
                // window.location.href = 'signin.html';
            }, 1000);
            // window.location.href = 'signin.html';
        } else {
            console.log('User already exists');
            
            toast('User already exists', '#f00', '#fff');
            setTimeout(()=>{
                // window.location.href = 'signup.html';
            },2000)

            document.getElementById('email').value = '';
            document.getElementById('password').value = '';
            document.getElementById('confirmPass').value = '';


        }
    }
}