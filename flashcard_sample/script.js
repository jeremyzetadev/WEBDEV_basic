// This example uses a simple click to toggle the 'flipped' class.
// For more advanced functionality like multiple flashcards or dynamic content,
// you would add more JavaScript logic here.

// Example of adding more flashcards dynamically (optional)
const flashcardsData = [
    { question: "Capital of japan", answer: "tokyo" },
    { question: "2 + 2?", answer: "4" },
    { question: "Programming language web", answer: "javascript" }
];

function randomizeFlashcardsData(){
    for (let i = flashcardsData.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [flashcardsData[i], flashcardsData[j]] = [flashcardsData[j], flashcardsData[i]];
  }
}

const container = document.querySelector('.flashcard-container');

flashcardsData.forEach(data => {
    const newFlashcard = document.createElement('div');
    newFlashcard.classList.add('flashcard');
    newFlashcard.onclick = function() {
        if(newFlashcard.className == "flashcard flipped") {
            changeChildPos();
            // this.classList.toggle('flipped');
        }
        this.classList.toggle('flipped');
        // if(newFlashcard.className = "flashcard flipped") {
        //     for(let i=0; i<100_000; i++){
        //         for(let j=0; j<50_000; j++){
        //         }
        //     }
        //     changeChildPos();
        //     this.classList.toggle('flipped');
        // }
        randomizeFlashcardsData();
    };

    const front = document.createElement('div');
    front.classList.add('flashcard-front');
    front.innerHTML = `<h2>${data.question}</h2>`;

    const back = document.createElement('div');
    back.classList.add('flashcard-back');
    back.innerHTML = `<p>${data.answer}</p>`;

    newFlashcard.appendChild(front);
    newFlashcard.appendChild(back);
    container.appendChild(newFlashcard);
});

function changeChildPos(){
    const container_tempStore = document.createElement('div');
    container_tempStore.class = "flashcard-container";
    const num_child = container.childElementCount;
    const c_cur = container.children[num_child-1];
    container_tempStore.appendChild(c_cur); 
    for(let i=1; i<num_child; i++){
        const c = container.children[0];
        container_tempStore.appendChild(c);
    }
    container.innerHTML = '';
    for(let i=0; i<num_child; i++){
        const c = container_tempStore.children[0];
        container.appendChild(c);
    }
}









