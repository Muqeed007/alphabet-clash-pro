function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}
function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function setBackGroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-500');
}

// function removeBackGroundColorById(elementId){
//     const element = document.getElementById(elementId);
//     element.classList.remove('bg-orange-500')
// }

function getRandomAlphabet(){
    // get or create an alphabet array
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

    // get a random index between 0 - 25 (a - z)
    const randomAlphabet = Math.random()*25;
    const index = Math.round(randomAlphabet);

    const alphabet = alphabets[index];
    return alphabet;
}