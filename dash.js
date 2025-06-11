let notes = JSON.parse(localStorage.getItem('notes')) || [];
let currentEditIndex = null;




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
    const header = document.getElementById('title').value;
    const texts = document.getElementById('content').value;

    if (!header || !texts) {
        toast('Inputs cannot be empty', '#f00', '#fff', 'center');
        return;
    }

    const noteObj = { title: header, content: texts };

    // Add note to global array
    notes.push(noteObj);

    // Optional: store in localStorage
    localStorage.setItem('notes', JSON.stringify(notes));

    displayNotes();

    // Clear input fields
    document.getElementById('title').value = '';
    document.getElementById('content').value = '';
};



const displayNotes = () => {
    const container = document.getElementById("notesContainer");
    container.innerHTML = '';

    notes.forEach((note, index) => {
        container.innerHTML += `
    <div class="col-sm-6 col-md-4 col-lg-3">
        <div class="card bg-light text-dark h-100 card-body">
            <h5 class="card-title">${note.title}</h5>
            <p class="card-text">${note.content}</p>
        </div>
        <div class="card-footer d-flex justify-content-between">
            <button class="btn btn-info btn-sm" data-bs-toggle="modal" data-bs-target="#editModal" onclick="editNote(${index})">Edit</button>
            <button class="btn btn-danger btn-sm" onclick="deleteNote(${index})">Delete</button>
        </div>
        </div>
    </div>
    `;
    });
}
function editNote(index) {
    currentEditIndex = index;
    document.getElementById("editTitle").value = notes[index].title;
    document.getElementById("editContent").value = notes[index].content;
}

function saveEdit() {
    const newTitle = document.getElementById("editTitle").value.trim();
    const newContent = document.getElementById("editContent").value.trim();

    if (newTitle && newContent && currentEditIndex !== null) {
        // Update the note in memory
        notes[currentEditIndex] = {
            title: newTitle,
            content: newContent
        };

        // SAVE updated notes array to localStorage
        localStorage.setItem('notes', JSON.stringify(notes));

        // Refresh UI
        displayNotes();

        // Close modal
        const modal = bootstrap.Modal.getInstance(document.getElementById('editModal'));
        modal.hide();

        // Clear index
        currentEditIndex = null;
    }
}
        displayNotes();

function deleteNote(index) {
    notes.splice(index, 1);
    displayNotes();
}




