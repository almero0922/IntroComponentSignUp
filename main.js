const f = document.forms['formA'].elements;
const caSubmit = document.querySelector('.input-submit');

caSubmit.addEventListener('click', (el) => {
    //let isInputCorrect = checkInfo(fData);
    for(let i = 0; i < f.length; i++){
        console.log(f[i].value);
    }
    el.preventDefault();
})

function checkInfo(){
    /*let name = fData.get('fname');
    let lname = fData.get('lname');
    let mail = fData.get('email');
    let password = fData.get('password');
    let inputs = [];
    */
}