var notesCounter;

window.onload = function () {
    var noteHeaderInput = document.getElementById('noteHeaderInput');
    var addNoteBtn = document.getElementById('addNoteBtn');
    var notesDiv = document.getElementById('notesDiv');

    addNoteBtn.onclick = addNote;
    notesCounter = 0;
    
}

function addNote() {
    var noteHeader = noteHeaderInput.value;
    if (noteHeader == '') return;
    notesDiv.appendChild(newNote(noteHeader));

    noteHeaderInput.value = '';
    notesCounter++;
}

function newNote(header) {
    var noteDiv = document.createElement('div');
    noteDiv.id = 'note' + notesCounter;
    //noteDiv.onclick = checkNote;

    var noteHeader = document.createElement('span');
    noteHeader.innerHTML = header;
    noteHeader.onclick = checkNote;
    noteDiv.appendChild(noteHeader);

    var delNoteBtn = document.createElement('input');
    delNoteBtn.id = 'deleteNoteBtn' + notesCounter;
    delNoteBtn.type = 'button';
    delNoteBtn.value = 'Удалить';
    delNoteBtn.onclick = deleteNote;
    noteDiv.appendChild(delNoteBtn);
    return noteDiv;
}

function deleteNote() {
    alert('[delete] id = ' + this.id);
    //notesCounter--;
}

function checkNote() {
    alert('[check] id = ' + this.parentElement.id);
}