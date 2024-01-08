const spanFn = document.getElementById('fn-message')
const spanLn = document.getElementById('ln-message')
const spanEa = document.getElementById('ea-message')
const spanPw = document.getElementById('pw-message')
const fnInp = document.getElementById('fn-text')
const lnInp = document.getElementById('ln-text')
const eaInp = document.getElementById('ea-text')
const pwInp = document.getElementById('pw-text')
const submitBtn = document.querySelector('input[type=submit]')

submitBtn.addEventListener('click', (e) => {
e.preventDefault()
    if(fnInp.value === ""){
        spanFn.textContent = `First name cannot be empty`
        fnInp.classList.add('error-style');
        fnInp.classList.add('icon');
    } else{
        spanFn.textContent = ""
        fnInp.classList.remove('error-style');
    };
    
    if(lnInp.value === ""){
        spanLn.textContent = `Last name cannot be empty`
        lnInp.classList.add('error-style');
    } else{
        spanLn.textContent = ""
        lnInp.classList.remove('error-style');
    };
    if(eaInp.value === ""){
        spanEa.textContent = `Looks like this is not an email`
        eaInp.classList.add('error-style');
    } else{
        spanEa.textContent = ""
        eaInp.classList.remove('error-style');
    };
    if(pwInp.value === ""){
        spanPw.textContent = `Password cannot be empty`
        pwInp.classList.add('error-style');
    } else{
        spanPw.textContent = ""
        pwInp.classList.remove('error-style')
    };

})
