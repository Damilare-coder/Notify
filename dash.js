document.addEventListener('keydown', (e) => {
    if (e.key == 'Enter') {
        addNote();
    }
})

const allNotes = []


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
        const signedInUser = JSON.parse(localStorage.getItem('person'))
        // console.log(signedInUser);
        showPerson.innerHTML = `<h4 class="my-3 text-light text-center">Welcome, ${signedInUser.fName}</h4>`
        console.log(signedInUser);

    } else {
        body.innerHTML = `<h4 class="my-3 text-center">You are not signed in, redirecting you to sign in...</h4>`
        setTimeout(() => {
            window.location.href = 'signin.html'
        }, 2000)
    }
}
checkPerson()

const addedNote = []

const signOut = () => {
    localStorage.removeItem('person')
    window.location.href = 'signin.html'
    checkPerson()

}

const addNote = () => {
    if (title.value === '' || content.value === '') {
        toast('Inputs cannot be empty', '#f00', '#fff', 'center');


    } else {
        // noteContainer.style.display = "block"

        const header = document.getElementById('title').value
        const texts = document.getElementById('content').value

        const noteObj = { header, texts }
        
        console.log(noteObj);

        const allUsers = JSON.parse(localStorage.getItem("person")) || {};
        // console.log(allUsers);
        // addedNote.push(noteObj)
        console.log(addedNote);

        // allNotes.push(addedNote)

        displayNotes()
        document.getElementById('title').value = ''
        document.getElementById('content').value = ''
    }
}

const displayNotes = () => {
    const cards = document.querySelectorAll('.note-card');
    // noteCard.innerHTML = addedNote

    // Loop through existing notes and map them to card divs
    addedNote.forEach((note, index) => {
        if (cards[index]) {
            cards[index].querySelector('.note-title').textContent = note.title;
            cards[index].querySelector('.note-content').textContent = note.content;
            cards[index].classList.remove('d-none');

            // newTitle.innerHTML = title.value
            // body.innerHTML = content.value

            // addedNote.map((note, i) => {
            //     noteCard.style.display = 'block'

            // })
        }

    });

    // Hide remaining empty cards
    for (let i = addedNote.length; i < cards.length; i++) {
        cards[i].style.display = 'none';

    }
};
