document.getElementById('btn-deposit').addEventListener('click',function(event){
    const depositField=document.getElementById('deposit-field');
    const newDepositAmount=depositField.value;    
    const depositTotalElement=document.getElementById('deposit-total');
    const previousDepositTotal=depositTotalElement.innerText;    
    
    depositField.value='';
    const currentDeposit=parseFloat(previousDepositTotal)+parseFloat(newDepositAmount);
    depositTotalElement.innerText=currentDeposit;

    const balanceElement=document.getElementById('balance-total');
    const priviousBalance=balanceElement.innerText;
    const currentBalance=parseFloat(priviousBalance)+parseFloat(newDepositAmount);
    balanceElement.innerText=currentBalance;

});

document.getElementById('btn-withdraw').addEventListener('click',function(event){
    const withDrawField=document.getElementById('withdraw-field');
    const newWithDrawAmount=withDrawField.value;
    
    const withDrawTotalElement=document.getElementById('withdraw-total');
    const previousWithdrawTotal=withDrawTotalElement.innerText;
    withDrawTotalElement.innerText=newWithDrawAmount;
    withDrawField.value='';

    const currentWithDraw=parseFloat(previousWithdrawTotal)+parseFloat(newWithDrawAmount);
    withDrawTotalElement.innerText=currentWithDraw;

    const balanceElement=document.getElementById('balance-total');
    const priviousBalance=balanceElement.innerText;
    const currentBalance=parseFloat(priviousBalance) - parseFloat(newWithDrawAmount);
    balanceElement.innerText=currentBalance;

    
});