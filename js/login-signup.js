const loginbox = document.querySelector('.login');
const signupbox = document.querySelector('.signup');
const forgotbox = document.querySelector('.forgot-pw');

const signupbtn = document.getElementById('sign-up-btn');
const loginbtn = document.getElementById('login-btn');
const forgotbtn = document.getElementById('forgot-btn');

signupbtn.addEventListener('click',(e)=>{
    e.preventDefault();

    loginbox.style.display='none';
    signupbox.style.display='flex';
})

loginbtn.addEventListener('click',(e)=>{
    e.preventDefault();

    loginbox.style.display='flex';
    signupbox.style.display='none';
})

forgotbtn.addEventListener('click',(e)=>{
    e.preventDefault();

    loginbox.style.display='none';
    forgotbox.style.display='flex';
})
