var users = [
    {
        user_name: 'Leidy',
        user_password: '1234567'
    },
    {
        user_name: 'Andrea',
        user_password: 'abc1234'
    }
];
var final_note = [
    {
        name:'Leidy',
        note: '100'
    },
    {
        name: 'Andrea',
        note: '90'
    }
];

var user_prompt = prompt('Ingrese usuario');
var password_prompt = prompt('Ingrese contraseña');

function iniciar_sesion(user, password) {
    console.log("xd");
    if ( user === users[0].user_name && password === users[0].user_password) {
        alert(final_note[0].note);
    } else if (user === users[1].user_name && password === users[1].user_password) {
        alert(final_note[1].note);
    } else {
        alert('Ups, usuario o contraseña incorrectos')
    }
}
    iniciar_sesion(user_prompt, password_prompt)