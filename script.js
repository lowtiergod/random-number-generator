const number = document.querySelector(".number");
const btn = document.querySelector(".generate");

const generateNumber = () => {
     // generate number between 1 & 10
     const randomNumber = Math.floor(Math.random() * 10) + 1;
     number.textContent = randomNumber;
}

generateNumber();

btn.addEventListener('click', generateNumber);


