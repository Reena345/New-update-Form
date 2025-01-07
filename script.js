document.body.style.backgroundImage = "url('./img/Space-Background-Image-8.jpg')";
const bgImg = document.querySelector(".bg-img");
if (bgImg) {
    bgImg.style.marginLeft = '35%';
    bgImg.style.marginTop = '10%';
}

const userDetails = document.getElementById('user-details');
const userForm = document.getElementById('user-form');

userForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const inputName = document.querySelector(".inPut").value;
    const inputEmail = document.querySelector(".inPut1").value;
    const inputAge = document.querySelector(".inPut2").value;
    const inputGender = document.querySelector('input[name="gender"]:checked').value;
    
    const selectedHobbies = Array.from(document.querySelectorAll('input[name="hobbies"]:checked'))
        .map(hobby => hobby.value)
        .join(', ');

    userDetails.innerHTML = `
        <p>Name: ${inputName}</p>
        <p>Email: ${inputEmail}</p>
        <p>Age: ${inputAge}</p>
        <p>Gender: ${inputGender}</p>
        <p>Hobbies: ${selectedHobbies}</p>
    `;
});

const bgColor = document.querySelector('.bgColor');
bgColor.style.backgroundColor = 'rgb(191, 197, 214)';
bgColor.style.color = 'rgb(1, 15, 53)';
bgColor.style.width = '500px';
bgColor.style.height = 'auto';
bgColor.style.borderRadius = '20px';
bgColor.style.margin = '25px 35%';
bgColor.style.padding = '40px';
console.log(bgColor);


const headIng = document.querySelector('.headIng');
headIng.style.fontSize = '25px';
headIng.style.color = 'white';
headIng.style.marginTop = '20px';

const headIng5 = document.querySelector('.headIng5');
headIng5.style.fontSize = '20px';
headIng5.style.color = 'white';
headIng5.style.backgroundColor = 'rgb(65, 84, 142)';
headIng5.style.borderRadius = '10px';
headIng5.style.border = 'none';
headIng5.style.padding = '10px';

const inputs = document.querySelectorAll('.inPut, .inPut1, .inPut2');
inputs.forEach(input => {
    input.style.width = '400px';
    input.style.fontSize = '16px';
    input.style.padding = '8px';
    
});
