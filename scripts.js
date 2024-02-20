let email = "GoodYear@gmail.com";
let pWord = "Password";


let button = document.getElementById('button')


button.addEventListener("click", function(){
   

    let emailInput = document.getElementById('inputEmail').value;
    let pWordInput = document.getElementById('inputPassword').value;

    
    console.log('pWordInput',pWordInput);

    if (emailInput === email) {
        if (pWordInput === pWord) {
            alert('Password Correct');

        } else {
            alert ('Invalid Password')
        };

    } else {
        alert ('Invalid Username');
    }
console.log('check')
})

/* window.onbeforeunload = function() {
    return "Dude, are you sure you want to leave? Think of the kittens!";
} */