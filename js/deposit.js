// document.getElementById('btn-deposit').addEventListener('click', function(){
//    // console.log('deposit button clicked');
//    const depositAmount = document.getElementById('deposit-amount');
//    const newDepositAmountString = depositAmount.value;
//    const newDepositAmount = parseFloat(newDepositAmountString);
//    //
//    depositAmount.value = '';
//    if(isNaN(newDepositAmount)){
//    alert('Please Provide Valid Number');
//    return;
// }
//   // console.log(newDepositAmount);
//   const depositTotal = document.getElementById('deposit-total');
//   const previousDepositTotalString = depositTotal.innerText;
//   const previousDepositTotal = parseFloat(previousDepositTotalString);
//   //console.log(previousDepositTotal);

//   const currentDepositBalance = newDepositAmount + previousDepositTotal;
//   depositTotal.innerText =currentDepositBalance;
//   /// 
//   const balanceTotalElement = document.getElementById('balance-total');
//   const balanceTotalElementString = balanceTotalElement.innerText;
//   const balanceTotal = parseFloat(balanceTotalElementString);
//  //console.log( typeof balanceTotal);

//  const totalBalanceElement = balanceTotal + currentDepositBalance ;
//  balanceTotalElement.innerText =totalBalanceElement;

// })

document.getElementById('btn-deposit').addEventListener('click',function(){
   /*
   step:1 . Get the element by Id
   step:2 . Get the value from the element
   Step:3 . Convert string value to a number
   */
   const newDepositAmount = getInputFieldValueById('deposit-amount');
   if(isNaN(newDepositAmount)){
      alert('Please Provide Valid Number');
      return;
   }
  

   // 1. get previous deposit total by id
   const previousDepositTotal = getTextElementValueById('deposit-total');
   // calculate the new deposit total
   const newDepositTotal = previousDepositTotal + newDepositAmount;
   // set deposit Total value
   setTextElementValueById('deposit-total', newDepositTotal);

   // get previous balance by using the function
   const previousBalanceTotal = getTextElementValueById('balance-total');
   const newBalanceTotal = previousBalanceTotal + newDepositAmount ;
   setTextElementValueById('balance-total', newBalanceTotal);
})

