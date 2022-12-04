const textArea = document.querySelector('.remembText');

let text = localStorage.getItem('textArea')
let textVal = textArea.value;
if (textArea) {
    textArea.value = text;
}
textArea.oninput = () => {
    localStorage.setItem('textArea', textArea.value);

}