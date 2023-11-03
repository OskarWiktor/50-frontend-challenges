const jokeElementHTML = document.getElementById('jokes-container--text');
const jokeBtn = document.getElementById('jokes-container--button');

generateJoke();

jokeBtn.addEventListener('click', generateJoke)

// using async/await
async function generateJoke() {
    const config = {
        headers: {
            Accept: 'application/json',
        },
    }
    const res = await fetch('https://icanhazdadjoke.com', config)
    const data = await res.json()
    jokeElementHTML.innerText = data.joke
}

// using .then()
// function generateJoke() {
//     const config = {
//         headers: {
//             Accept: 'application/json',
//         },
//     }
//     fetch('https://icanhazdadjoke.com', config)
//     .then((res) => res.json())
//     .then((data) => {
//         jokeElementHTML.innerText = data.joke
//     })
// }