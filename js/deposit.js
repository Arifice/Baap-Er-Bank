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