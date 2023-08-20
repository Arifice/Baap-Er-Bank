document.getElementById('btn-submit').addEventListener('click',function(event){    
        const emailField=document.getElementById('email');
        const emailValue=emailField.value;      

        const passwordlField=document.getElementById('password');
        const passwordValue=passwordlField.value;
        console.log(emailValue,passwordValue);        
        emailField.value='';
        passwordlField.value='';
        if(emailValue=='arifice13@gmail.com' && passwordValue==='password'){
            console.log('valid user');
        }
        else{
            console.log('invalid user');
        }
    });