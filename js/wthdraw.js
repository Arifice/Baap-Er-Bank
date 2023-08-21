document.getElementById('btn-withdraw').addEventListener('click',function(event){
    const withDrawField=document.getElementById('withdraw-field');
    const newWithDrawAmount=withDrawField.value;
    
    const withDrawTotalElement=document.getElementById('withdraw-total');
    const previousWithdrawTotal=withDrawTotalElement.innerText;
   
    
    const balanceElement=document.getElementById('balance-total');
    const priviousBalance=balanceElement.innerText;
    withDrawField.value='';

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