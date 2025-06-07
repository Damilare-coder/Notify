document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        signIn();
    }
});

let gottenUsers = JSON.parse(localStorage.getItem('noters')) || []
console.log(gottenUsers);

const toast = (text, background, color, position = 'right') => {
    Toastify({
        text,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position, // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background,
            color,
        },
        onClick: function () { } // Callback after click
    }).showToast();
}

const signIn = () => {

    if (email.value === '' || password.value === '') {
        sub.innerHTML = 'Signing in...'
        toast('Not that quick 😁, please fill in the inputs', '#f00', '#fff')
        setTimeout(() => {
            sub.innerHTML = 'Submit'
        }, 1000)


    } else {
        sub.innerHTML = 'Signing in...'
        const mail = document.getElementById('email').value;
        const pass = document.getElementById('password').value;

        const signInObj = { mail, pass };
        const found = gottenUsers.find(user => user.mail === mail && user.pass === pass)
        console.log(found);
        
        localStorage.person = JSON.stringify(found)

        if(found == undefined){
            toast('User not found, redirecting you to sign up page', '#f00', '#fff', 'left')
            setTimeout(() => {
                window.location.href = 'signup.html';
            }, 1500);

        } else{
            toast('Sign in successful😁', '#006400', '#fff')
            setTimeout(()=>{
                window.location.href = 'loaderdash.html'
            }, 1500)
        }
        
    }
}