
document.body.style.backgroundImage = "url('./img/Space-Background-Image-8.jpg')";
document.body.style.backgroundSize = 'cover';
document.body.style.backgroundPosition = 'center';

const userForm = document.getElementById('user-form');
userForm.style.display = 'flex';
userForm.style.flexDirection = 'column';
userForm.style.color = 'white';
userForm.style.margin = '0 auto'; 


const inputs = document.querySelectorAll('.inPut, .inPut1, .inPut2');
inputs.forEach(input => {
    input.style.width = '400px';
    input.style.fontSize = '16px';
    input.style.padding = '8px';
    input.style.margin = '5px 0'; 
});


const bgColor = document.querySelector('.bgColor');
bgColor.style.backgroundColor = 'rgb(1, 15, 53)';
bgColor.style.width = '500px';
bgColor.style.borderRadius = '20px';
bgColor.style.padding = '30px';  
bgColor.style.margin = '0px auto';  


const headIng = document.querySelector('.headIng');
headIng.style.fontSize = '25px';
headIng.style.color = 'white';  
headIng.style.marginTop = '0px';

const headIng5 = document.querySelector('.headIng5');
headIng5.style.fontSize = '20px';
headIng5.style.color = 'white';  
headIng5.style.backgroundColor = 'rgb(6, 14, 37)';
headIng5.style.borderRadius = '10px';
headIng5.style.border = 'none';
headIng5.style.padding = '8px'; 
