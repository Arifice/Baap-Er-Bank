document.getElementById('btn-withdraw').addEventListener('click',function(event){
    const withDrawField=document.getElementById('withdraw-field');
    const newWithDrawAmount=withDrawField.value;
    withDrawField.value='';
    if(isNaN(newWithDrawAmount)){
        alert('Invalid Input');
        return;
    }
    
    const withDrawTotalElement=document.getElementById('withdraw-total');
    const previousWithdrawTotal=withDrawTotalElement.innerText;
   
    
    const balanceElement=document.getElementById('balance-total');
    const priviousBalance=balanceElement.innerText;
    

    if(parseFloat(newWithDrawAmount) > parseFloat(priviousBalance)){
        alert('Insufficient Balance');
        return;
    }
    
    withDrawTotalElement.innerText=newWithDrawAmount;
    const currentWithDraw=parseFloat(previousWithdrawTotal)+parseFloat(newWithDrawAmount);
    withDrawTotalElement.innerText=currentWithDraw;   
    const currentBalance=parseFloat(priviousBalance) - parseFloat(newWithDrawAmount);
    balanceElement.innerText=currentBalance;

    
});