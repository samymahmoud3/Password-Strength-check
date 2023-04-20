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