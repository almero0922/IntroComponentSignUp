const f = document.forms['formA'].elements;
const caSubmit = document.querySelector('.input-submit');
const reText = /^[a-zA-Z\s]{1,10}/;
const reEmail = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
const rePass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

caSubmit.addEventListener('click', (el) => {
    //let isInputCorrect = checkInfo(fData);
    for(let i = 0; i < f.length-1; i++){
        let type = f[i].getAttribute('type');
        let p = document.createElement('p');
        let placeHolder = f[i].getAttribute('placeholder');
        let validation = checkInfo(f[i].value, type);
        if(!validation){
            if(f[i].classList.contains('input-error')){
                el.preventDefault();
                return
            }else{
                f[i].classList.add('input-error');
                p.classList.add('text-error');
                if(type == 'text' || type == 'password'){
                    p.innerText = placeHolder + ' cannot be empty or is wrong';
                }else if(type == 'email'){
                    p.innerText = 'Looks like this is not an email';
                }
                f[i].parentNode.insertBefore(p, f[i+1]);
            }
        }else{
            let nextError = f[i].nextElementSibling;
            if(nextError.tagName == 'P'){
                nextError.parentNode.removeChild(nextError);
                f[i].classList.remove('input-error');
            }
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