let bSubmit = document.querySelector("#sBut")
let Uemail = document.querySelector("#exampleFormControlInput1")
let Usuggestion = document.querySelector("#exampleFormControlTextarea1")
let container = document.querySelector(".container")
let heading = document.querySelector(".heading")

bSubmit.addEventListener('click',()=>{
   container.style.opacity = 0;
   heading.innerHTML="Thank you for your suggestion "
   

})
 function SendMail(){
    var params = {
        from_name : Uemail.value,
        message : Usuggestion.value
    }
    emailjs.send("service_cba0kiv","template_q70fssk",params).then(function(res){
        alert("Submitted Successfully");
    })
 }