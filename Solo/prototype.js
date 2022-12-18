
function setFormMessage(formElement, type, message){
    const messageElement = formElement.querySelector(".form_message");

    messageElement.textContent = message;
    messageElement.classList.remove("form_message-success", "form_message-error");
    if(type == "error"){
        messageElement.classList.add('form_message-error');
    }else{
        messageElement.classList.add('form_message-success');
    }

}
// function checkOut(){
//     console.log(localStorage.getItem('name'))
//     console.log(localStorage.getItem('password'))
// }

// function check(){
//     var name = document.getElementById('name').value;
//     var password = document.getElementById('password').value;

//     console.log(name);
//     console.log(password);

//     if(name == localStorage.getItem('name') ){
//         check = true;
//     }else{
//         check = false;
//     }
// }

function save(){
    var email = document.getElementById('signupUsername').value;
    var password = document.getElementById('password1').value;

    localStorage.setItem('name', email);
    localStorage.setItem('password', password);
}

function setInputError(inputElement, message){
    inputElement.classList.add("form_input-error");
    inputElement.parentElement.querySelector(".form_input-error-message").textContent = message;
}

function clearInputError(inputElement){
    inputElement.classList.remove("form_input-error");
    inputElement.parentElement.querySelector(".form_input-error-message").textContent = "";
}


document.addEventListener("DOMContentLoaded", ()=>{
    const loginForm = document.querySelector("#login");
    const createAccountForm =document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e =>{
        e.preventDefault();
        loginForm.classList.add("form-hidden");
        createAccountForm.classList.remove("form-hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e =>{
        e.preventDefault();
        loginForm.classList.remove("form-hidden");
        createAccountForm.classList.add("form-hidden");
    });

    loginForm.addEventListener("submit", e =>{
        e.preventDefault();

        var name = document.getElementById('name').value;
        var password = document.getElementById('password').value;

        console.log(localStorage.getItem('password'));
        console.log(password);
        console.log(localStorage.getItem('name'));
        console.log(name);

        if(name == localStorage.getItem('name') && name.length != 0 && localStorage.getItem('password') == password){
            setFormMessage(loginForm, "success", "Log in successfull");
        }else{
            setFormMessage(loginForm, "error", "Invalid username/password combination"); 
        }
    
        // setFormMessage(loginForm, "success", "Log in successfull");
        // setFormMessage(loginForm, "error", "Invalid username/password combination");    
    });

    document.querySelectorAll(".form_input").forEach(inputElement => {
        inputElement.addEventListener("blur", e =>{
            if(e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10){
                setInputError(inputElement, "Username must be at least 10 characters in length");
            }
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });
});