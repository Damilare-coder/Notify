document.addEventListener('keydown', (e) => {
    if (e.key = 'Enter') {
        addNote();
    }
})

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

const checkPerson = () => {
    if (localStorage.noters) {
        const signedInUser = JSON.parse(localStorage.getItem('noters'))
        console.log(signedInUser);
        showPerson.innerHTML = `<h4 class="my-3 text-light text-center">Welcome ${signedInUser.mail}, sign in</h4>`
        console.log(signedInUser);
        

    } else {
        body.innerHTML = `<h4 class="my-3 text-center">You are not signed in, redirecting you to sign in...</h4>`
        setTimeout(() => {
            window.location.href = 'signin.html'
        }, 2000)
    }
}
checkPerson()

const signOut = () => {
    localStorage.removeItem('person')
    window.location.href = 'signin.html'
    checkPerson()

}

const addNote = () => {
        if(title.value === '' || content.value === '' ) {
        toast('Inputs cannot be empty', '#f00', '#fff')


    } else {
        // errorMsg.style.display = 'none'
        cart.push(item.value)

        document.getElementById('item').value = ''
        console.log(cart);
        if(cart.length >= 1) {
            btnDelete.style.display = 'block'
            
        }
        displayItem()
    }
}


