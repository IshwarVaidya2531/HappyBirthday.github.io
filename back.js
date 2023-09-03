let a = document.getElementById('ok');
let b = document.getElementById('no');
const numConfetti = 100;
const container = document.body;

function createConfetti(e) {
    for (let i = 0; i < numConfetti; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        container.appendChild(confetti);

        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.animation = `confetti-fall ${(Math.random() * 3) + 2}s linear infinite, spin ${(Math.random() * 3) + 2}s linear infinite`;

        confetti.addEventListener('animationiteration', () => {
            confetti.style.left = `${Math.random() * 100}vw`;
        });
    }

}
createConfetti();

a.addEventListener('click', happy)
let ans = prompt('Do you really want to see it?').toLocaleLowerCase();
function happy(e) {
    do {

        let myans = prompt('Do you like it?').toLowerCase();

        setTimeout(() => {
            alert('You will be always a topper to me🦋');
        }, 3000);

        setTimeout(() => {
            alert(' Hey Topper👑🙋🏻‍♂️, Cheers to 21🥂');
        }, 7000);
        setTimeout(() => {
            alert("You look too good in saree and even more Beautifull with glasses on open hairs🪄🌸")
        }, 9000);
        


    } while (ans != yes);
}

b.addEventListener('click', feed)
function feed(e) {
    prompt('Share your thought, Tells us to improve.. submit your feedback');
    setTimeout(() => {
        alert('Once again Happy Birthday from 6 Dec 21❤️')
    }, 3000);
}



