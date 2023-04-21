const pswrd = document.querySelector('#myPassword');
const show = document.querySelector('.show');

//show&hide password
show.onclick = function() {
    if (pswrd.type === 'password') {
        pswrd.setAttribute('type', 'text');//change type of input to text to show password
        show.classList.add('hide')//replace show text to hide text
    }
    else {
        pswrd.setAttribute('type', 'password');//change type of input to password to hide password
        show.classList.remove('hide');//replace hide text to show text
    }
}

//function to return a number representing the strength of the password
function Strength(password) {
    let i = 0;
    if (password.length > 6){
        i++;
    }
    if (password.length >= 10){
        i++;
    }
    if (/[A-Z]/.test(password)){
        i++;
    }
    if (/[0-9]/.test(password)){
        i++;
    }
    if (/[A-Za-z0-8]/.test(password)){
        i++;
    }
    return i;
}


let container = document.querySelector('.container');
//function to detect if the password is weak or medium or strong
document.addEventListener('keyup', function(e) {
    let password = document.querySelector('#myPassword').value;
    let strength = Strength(password); //call Strengthen function
    //add class weak strength < 2
    if (strength<= 2){
        container.classList.add('weak');
        container.classList.remove('medium');
        container.classList.remove('strong');
    }
    //add class medium 
    else if (strength >= 2 && strength<= 4){
        container.classList.remove('weak');
        container.classList.add('medium');
        container.classList.remove('strong');
    }
    //add class strong 
    else 
    {
        container.classList.remove('weak');
        container.classList.remove('medium');
        container.classList.add('strong');
    }
});