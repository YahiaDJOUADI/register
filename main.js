let name = document.getElementById('name');
let email = document.getElementById('email');
let password = document.getElementById('password');
let gender = document.getElementById('gender');
let btn = document.getElementById('btn');
let result = document.getElementById('result');

btn.onclick = function() {
    if(name.value && email.value && password.value.length >= 8) {
        result.style.color = 'green';
        
        if(gender.value == 'man') {
            result.innerText = 'mar7ba khoya l3ziz';
        }
        else {
            result.innerText = 'mar7ba okhty';
        }

    
    }
    else {
        result.innerText = 'Ak ghalet hbb';
        result.style.color = 'red';
    }
};