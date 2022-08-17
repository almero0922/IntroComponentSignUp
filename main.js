const f = document.forms['formA'].elements;
const caSubmit = document.querySelector('.input-submit');
const reText = /^[a-zA-Z\s]*$/;
const reEmail = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
const rePass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

caSubmit.addEventListener('click', (el) => {
    //let isInputCorrect = checkInfo(fData);
    for(let i = 0; i < f.length-1; i++){
        console.log(f[i].value);
        console.log(checkInfo(f[i].value, f[i].getAttribute('type')));
        let type = f[i].getAttribute('type');
        let p = document.createElement('p');
        let placeHolder = f[i].getAttribute('placeholder');
        if(!checkInfo(f[i].value, type)){
            f[i].classList.add('input-error');
            p.classList.add('text-error');
            if(type == 'text' || type == 'password'){
                p.innerText = placeHolder + ' cannot be empty or is wrong';
            }else if(type == 'email'){
                p.innerText = 'Looks like this is not an email';
            }
            f[i].parentNode.insertBefore(p, f[i+1]);
        }
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