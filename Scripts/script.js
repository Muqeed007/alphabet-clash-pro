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
    // removeBackGroundColorById(alphabet);

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
        console.log('you get a point');
    }else{
        console.log('you lost a life');
    }
}
document.addEventListener('keyup',handleKeyboardKeyupEvent);
