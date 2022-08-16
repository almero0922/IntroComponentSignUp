const f = document.forms['formA'].elements;
const caSubmit = document.querySelector('.input-submit');
const reText = /^[a-zA-Z\s]*$/;
const reEmail = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
const rePass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

caSubmit.addEventListener('click', (el) => {
    //let isInputCorrect = checkInfo(fData);
    for(let i = 0; i < f.length; i++){
        console.log(f[i].value);
        console.log(checkInfo(f[i].value, f[i].getAttribute('type')));
    }
    el.preventDefault();
})

function checkInfo(value, type){
    if(type == 'text'){
        return reText.test(value);
    }else if(type == 'email'){
        return reEmail.test(value);
    }else if(type =='password'){
        return rePass.test(value);
    }
}