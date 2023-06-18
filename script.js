let form=document.querySelector("#form")
let userName=document.querySelector("#username")
let email=document.querySelector("#email")
let password=document.querySelector("#password")
let passwordConfirm=document.querySelector("#password-confirm")
let inputs=document.querySelectorAll("#form input")
document.addEventListener('DOMContentLoaded', ()=>{
    inputs.forEach(input=> input.value='')
})
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    checkFormValidation()
   
})

function checkFormValidation(){
    if(userName.value =='' )  error(userName,'نام کاربری را وارد کنید')
    else success(userName)

    if(email.value =='' )  error(email,'ایمیل را وارد کنید')
    else if(!email.value.includes("@gmail.com")) error(email,'فرمت ایمیلتان پشتیبانی نمیشود')
    else success(email)

    if(password.value =='' )  error(password,'رمز عبور را وارد کنید')
    else success(password)

    if(passwordConfirm.value =='' )  error(passwordConfirm,'رمز عبور مجدد را وارد کنید')
    else if(password.value !== passwordConfirm.value) error(passwordConfirm,'با رمز عبور وارد شده مطابقت ندارد')
    else success(passwordConfirm)
    
}

function error(input,message){
 let formControl=input.parentElement;
 formControl.querySelector("small").innerHTML=message;
 formControl.className="form-control error"
}

function success(input){
    input.parentElement.className='form-control success'
}