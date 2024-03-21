const words = ['mango', 'banana', 'melon', 'pineapple', 'strawberry', 'cucumber', 'pumpkin', 'cherry'];
const wordsContainer = document.querySelector('.word');

function getRandomWord(arr) {
    const randomNumber = Math.floor(Math.random() * arr.length);
    return arr[randomNumber];
}

function showRandomWord() {
    const randomWord = getRandomWord(words);
    wordsContainer.textContent = '';

    const fragment = new DocumentFragment();
    randomWord.split("").forEach(item => {
        const letter = document.createElement('span');
        letter.textContent = item;
        fragment.append(letter);
    })
    wordsContainer.append(fragment);
};

showRandomWord();

let i = 0;

document.addEventListener('keydown', function(event) {
    const element = wordsContainer.querySelectorAll('span');

    if (event.key === element[i].textContent) {
        element[i].className = 'c';
        i++;
    } else {
        element[i].className = 'w';
    }
});