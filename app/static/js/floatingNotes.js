const container = document.getElementById("floating-notes-container");
const noteCount = 7;
const imgUrl1 = "/static/imgs/musicNotes/music_note.png";
const imgUrl2 = "/static/imgs/musicNotes/treble_clef.png";
const imgUrl3 = "/static/imgs/musicNotes/bass_clef.png";


function createFloatingNote(imgUrl) {
    for (let i = 0; i < noteCount; i++) {
        const note = document.createElement("div");
        switch (imgUrl) {
            case imgUrl1:
                note.className = "floating-note";
                break;
            case imgUrl2:
                note.className = "floating-treble";
                break;
            case imgUrl3:
                note.className = "floating-bass";
                break;
        }
        note.style.backgroundImage = `url('${imgUrl}')`;

        // Randomize position inside the viewport
        note.style.left = Math.random() * window.innerWidth + "px";
        note.style.top = Math.random() * window.innerHeight + "px";

        // Randomize animation duration so notes float at different speeds
        const duration = 10 + Math.random() * 10; // 10s to 20s
        note.style.animationDuration = duration + "s";

        container.appendChild(note);
    }
}

createFloatingNote(imgUrl1);
createFloatingNote(imgUrl2);
createFloatingNote(imgUrl3);