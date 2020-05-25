function main(){
    let title = document.title;
    let nombreLigne = document.querySelectorAll('tr').length;
    let nombreColonne = document.querySelectorAll('th').length;
    let nombreSemestre = "10 Semestres";
    let noteEleve1S5 = document.getElementById('id1').innerText;
    let noteEleve2S5 = document.getElementById('id2').innerText;
    let newNote = parseInt(noteEleve1S5) + 2;
    document.getElementById('id1').innerText = newNote;

    document.body.appendChild("Document Title : " + title);
}

main();