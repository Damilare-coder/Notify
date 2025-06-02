document.addEventListener('keydown', (e)=>{
    if(e.key === 'Enter') {
        signIn();
    }
});

let gottenUsers = JSON.parse(localStorage.getItem('users')) || []
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
        toast('Not that quick 😁, please fill in the inputs', '#f00', '#fff')
        if (password.value !== confirmPass.value) {
        toast('Password mismatch ', '#f00', '#fff')
        document.getElementById('confirmPass').value = '';
        }

    } else {

    const mail = document.getElementById('email').value;
    const pass = document.getElementById('password').value;
}
}