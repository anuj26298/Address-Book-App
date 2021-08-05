window.addEventListener('DOMContentLoaded',(event) =>{
    const name = document.querySelector("#name");
    const textError = document.querySelector(".text-error");
    name.addEventListener('input',function(){
        try{
            new Person().fullName = name.value;
            textError.textContent = "";
        }catch(e){
            textError.textContent = e;
        }
    });

    const mobileNumber = document.querySelector("#mobile");
    const mobileError = document.querySelector(".mobile-error");
    mobileNumber.addEventListener('input',function(){
        try{
            new Person().mobileNumber = mobileNumber.value;
            mobileError.textContent = "";
        }catch(e){
            mobileError.textContent = e;
        }
    })
});