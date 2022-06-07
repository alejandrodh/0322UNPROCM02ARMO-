//Validando formularios.

let formulario = document.querySelector('form');
let email = document.querySelector('.email');
let password = document.querySelector('.password');
// let errorEmail = document.querySelector('.error-email');
// let errorPassword = document.querySelector('.error-password');
let error = document.querySelector('.error')

email.addEventListener('focus',function(){
    error.innerText = ''
})

password.addEventListener('focus',function(){
    error.innerText = ''
})

formulario.addEventListener('submit', function(evento){
    evento.preventDefault();
    //console.log('no se manda el form');

    if(email.value == ''){
        //alert('El email es obligatorio')
        // errorEmail.innerText = 'El email es obligatorio'
        error.innerText = 'El email es obligatorio'
    } else if(password.value == ''){
        //alert('La contraseña es obligatoria')
        // errorPassword.innerText = 'La contraseña es obligatoria'
         error.innerText = 'La contraseña es obligatoria'
    } else if(password.value.length <= 3){
        //alert('La contraseña debe tener más de 3 caracteres.')
        // errorPassword.innerText = 'La contraseña debe tener más de 3 caracteres.'
        error.innerText = 'La contraseña debe tener más de 3 caracteres.'

    } else {
        this.submit()
    }

})