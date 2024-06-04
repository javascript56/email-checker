

console.log("email checker")

const submit=document.querySelector('.submit')

let email=document.querySelector('#email')



let checkEmail

submit.addEventListener('click',function(e){
    e.preventDefault()
   checkEmail =email.value
   console.log(checkEmail);
    let check=validateChecker(checkEmail)
    // console.log(check);
    // console.log(check);
   if(checkEmail.length>5 && check===true ){
    
     alert("you email is valid")
   }
   else{
     alert('not valid email')
   }

      
    
    
   
})
let isSearch=false
function validateChecker(char){
    let value
    for(let i=0;i<char.length;i++){
        value=char[i]
        console.log(value);

        if(value==="@"){
            isSearch=true
            return isSearch
        }
       
        
       

    }
   
}




