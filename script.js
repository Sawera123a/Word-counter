const textbox = document.getElementById('textbox');
const word=document.getElementById('word');
const char=document.getElementById('char');

textbox.addEventListener('input',counter);

function charcount(text){
    let count=0;
    for(let i=0; i < text.length;i++){
        if(text[i]!==' '){
            count++;
        }
    }

    return count;
    
}

function wordcount(text){
    let count=0;
    let wordStarted=false;
    for (let i = 0; i < text.length; i++) {
        if (text[i] !== ' ' && !wordStarted) {
            count++;
            wordStarted = true;
        } else if (text[i] === ' ') {
            wordStarted = false;
        }
    }
    return count;   
}

function counter() {
    const text = textbox.value;
    const charLength = charcount(text);  //(for characterlength without space)
    //const charLength = text.value (for characterlength with space)
    const wordLength = wordcount(text);

    char.innerHTML = charLength;

    word.innerHTML = wordLength;
}

function clearText() {
    textbox.value = '';
    counter();
}