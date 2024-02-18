// function play(){
//     // step-1 --> hide the home screen
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     // step-2 --> show the playground
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');   
// }

function continueGame(){
    // generating randem alphabet
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