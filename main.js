var users = [
    {
        user_name: 'Leidy',
        user_password: '1234567'
    },
    {
        user_name: 'Andrea',
        user_password: 'abc1234'
    },
    {
        user_name: 'Kevin',
        user_password: '1234abc'
    },
    {
        user_name: 'Hassler',
        user_password: '123abc'
    },
    {
        user_name: 'Miguel',
        user_password: '02122020'
    },
    {
        user_name: 'Angel',
        user_password: '02122020la'
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
    },
    {
        name: 'Kevin',
        note: '100'
    },
    {
        name: 'Hassler',
        note: '90'
    },
    {
        name: 'Miguel',
        note: '100'
    },
    {
        name: 'Angel',
        note: '90'
    }
];

var user_prompt = prompt('Ingrese usuario');
var password_prompt = prompt('Ingrese contraseña');

function iniciar_sesion(user, password) {
    for(var i=0; i < users.length; i++) {
        if ( user === users[0].user_name && password === users[0].user_password) {
            alert(final_note[0].note); return true
        } else if (user === users[1].user_name && password === users[1].user_password) {
            alert(final_note[1].note); return true
        } else if (user === users[2].user_name && password === users[2].user_password) {
            alert(final_note[2].note); return true
        } else if (user === users[3].user_name && password === users[3].user_password) {
            alert(final_note[3].note); return true
        } else if (user === users[4].user_name && password === users[4].user_password) {
            alert(final_note[4].note); return true
        } else if (user === users[5].user_name && password === users[5].user_password) {
            alert(final_note[5].note); return true
        } else {
            alert("Ups, contraseña incorrecta"); return false
        }
    }
    
}
    iniciar_sesion(user_prompt, password_prompt)