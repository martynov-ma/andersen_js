window.onload = function () {
    var noteHeaderInput = document.getElementById('noteHeaderInput');
    var addNoteBtn = document.getElementById('addNoteBtn');
    var notesDiv = document.getElementById('notesDiv');

    addNoteBtn.onclick = addNote;
}

function addNote() {
    var noteHeader = noteHeaderInput.value;
    if (!noteHeader.trim().length) {
        noteHeaderInput.value = '';
        return;
    }
    notesDiv.appendChild(newNote(noteHeader));
    noteHeaderInput.value = '';
}

function newNote(header) {
    var noteDiv = document.createElement('div');
    noteDiv.className = 'note';
    noteDiv.onclick = checkNote;

    var noteHeader = document.createTextNode(header);
    noteDiv.appendChild(noteHeader);

    var deleteNoteBtn = document.createElement('input');
    deleteNoteBtn.type = 'button';
    deleteNoteBtn.value = 'Удалить';
    deleteNoteBtn.onclick = deleteNote;
    noteDiv.appendChild(deleteNoteBtn);
    return noteDiv;
}

function deleteNote() {
    this.parentElement.remove();
}

function checkNote() {
    if (this.className.split(' ').length == 1) {
        this.className += ' checked';
    } else {
        this.className = 'note';
    } 
}