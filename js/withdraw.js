//step:1
document.getElementById('btn-withdraw').addEventListener('click',function(){
    //step 2
    const newWithdrawAmountElement = document.getElementById('withdraw-amount');
    const newWithdrawAmountString = newWithdrawAmountElement.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
     // step 7
    newWithdrawAmountElement.value = '';
    if(isNaN(newWithdrawAmount)){
        alert('Please Provide Valid Number');
        return;
    }
    //Step 3
    const previousrWithdrawAmountElement = document.getElementById('withdraw-total');
    const previousrWithdrawAmountString = previousrWithdrawAmountElement.innerText;
    const previousrWithdrawAmount = parseFloat(previousrWithdrawAmountString);

    //
    const currentWithdrawAmount = previousrWithdrawAmount + newWithdrawAmount;
    previousrWithdrawAmountElement.innerText = currentWithdrawAmount ;
    //
    const balanceTotalElement = document.getElementById('balance-total');
    const balanceTotalElementString = balanceTotalElement.innerText;
    const balanceTotal = parseFloat(balanceTotalElementString);
    if(newWithdrawAmount > balanceTotal){
        alert ('Insufficient Balance');
        return;
    }
    //
    const totalBalanceElement = balanceTotal - newWithdrawAmount ;
    balanceTotalElement.innerText =totalBalanceElement;
})