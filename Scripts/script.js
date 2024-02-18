// function play(){
//     // step-1 --> hide the home screen
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     // step-2 --> show the playground
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');   
// }
function continueGame(){
    // generating random alphabet
    const alphabet = getRandomAlphabet();

    // set randomly generated alphabet on screen
    const currentAlphabetNumber = document.getElementById('current-alphabet');
    currentAlphabetNumber.innerText = alphabet;

    // set background color
    setBackGroundColorById(alphabet);
}

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}
function handleKeyboardKeyupEvent(event){
    const playerPressed = event.key;

    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    if(playerPressed === expectedAlphabet){
        // update score
        // 1. get current score
        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);
        // increase score by 1
        const newScore = currentScore + 1;
        // show update score
        currentScoreElement.innerText = newScore;
        // start new round
        removeBackGroundColorById(expectedAlphabet);
        continueGame();
    }else{
        // step 1. get current life number
        const currentLifElement = document.getElementById('current-life');
        const currentLifeText = currentLifElement.innerText;
        const currentLife = parseInt(currentLifeText);
        // step 2. reduce life count
        const newLife = currentLife - 1;
        // step 3. display updated life
        currentLifElement.innerText = newLife;
    }
}
document.addEventListener('keyup',handleKeyboardKeyupEvent);
