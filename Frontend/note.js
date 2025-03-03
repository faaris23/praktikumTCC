document.addEventListener('DOMContentLoaded', () => {
    const saveButton = document.getElementById('save');
    const titleInput = document.getElementById('title');
    const contentInput = document.getElementById('content');
    const noteList = document.getElementById('notes');
    const noteListContainer = document.getElementById('note-list');
    const hamburgerButton = document.getElementById('hamburger');
    const newNoteButton = document.getElementById('new-note');

    let notes = [];

    saveButton.addEventListener('click', () => {
        const title = titleInput.value;
        const content = contentInput.value;

        if (title && content) {
            const note = { title, content };
            notes.push(note);
            renderNotes();
            clearInputs();
        } else {
            alert('Judul dan isi catatan tidak boleh kosong!');
        }
    });

    hamburgerButton.addEventListener('click', () => {
        noteListContainer.classList.toggle('hidden');
    });

    newNoteButton.addEventListener('click', () => {
        clearInputs();
        noteListContainer.classList.add('hidden');
    });

    function renderNotes() {
        noteList.innerHTML = '';
        notes.forEach((note, index) => {
            const li = document.createElement('li');
            li.textContent = note.title;
            li.classList.add('cursor-pointer', 'hover:underline');
            li.addEventListener('click', () => {
                titleInput.value = note.title;
                contentInput.value = note.content;
                noteListContainer.classList.add('hidden');
            });
            noteList.appendChild(li);
        });
    }

    function clearInputs() {
        titleInput.value = '';
        contentInput.value = '';
    }
});