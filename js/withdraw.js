// //step:1
// document.getElementById('btn-withdraw').addEventListener('click',function(){
//     //step 2
//     const newWithdrawAmountElement = document.getElementById('withdraw-amount');
//     const newWithdrawAmountString = newWithdrawAmountElement.value;
//     const newWithdrawAmount = parseFloat(newWithdrawAmountString);
//      // step 7
//     newWithdrawAmountElement.value = '';
//     if(isNaN(newWithdrawAmount)){
//         alert('Please Provide Valid Number');
//         return;
//     }
//     //Step 3
//     const previousrWithdrawAmountElement = document.getElementById('withdraw-total');
//     const previousrWithdrawAmountString = previousrWithdrawAmountElement.innerText;
//     const previousrWithdrawAmount = parseFloat(previousrWithdrawAmountString);

//     //
//     const currentWithdrawAmount = previousrWithdrawAmount + newWithdrawAmount;
//     previousrWithdrawAmountElement.innerText = currentWithdrawAmount ;
//     //
//     const balanceTotalElement = document.getElementById('balance-total');
//     const balanceTotalElementString = balanceTotalElement.innerText;
//     const balanceTotal = parseFloat(balanceTotalElementString);
//     if(newWithdrawAmount > balanceTotal){
//         alert ('Insufficient Balance');
//         return;
//     }
//     //
//     const totalBalanceElement = balanceTotal - newWithdrawAmount ;
//     balanceTotalElement.innerText =totalBalanceElement;
// })
/*
1. Add withdraw button evnet handler
2. Get withdraw amount by using getInputFieldValueById function
3. Get previous withdraw amount by using getTextElementValueById function
4. Calculate new withdraw total and set the value
4-5 set new withdraw total by using setTextElementValueById function
5. Get previous Balance total by using getTextElementValueById function
6, Calculate new balance total
7. set balance total using setTextElementValueById

*/

document.getElementById('btn-withdraw').addEventListener('click', function(){
    const newWithdrawAmount = getInputFieldValueById('withdraw-amount');
    const previousBalanceTotal = getTextElementValueById('balance-total');

    if(newWithdrawAmount > previousBalanceTotal){
        alert ('Insufficient Balance');
        return;
    }
    else{
        const previousrWithdrawTotal = getTextElementValueById('withdraw-total');

        const newWithdrawTotal = previousrWithdrawTotal + newWithdrawAmount;
        setTextElementValueById('withdraw-total', newWithdrawTotal);
        const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    setTextElementValueById('balance-total', newBalanceTotal );

    }
    
    
    
   
   //setTextElementValueById('balance-total', newBalanceTotal);
    


})