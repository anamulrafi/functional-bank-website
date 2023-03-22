document.getElementById('btn-deposit').addEventListener('click', function(){
   // console.log('deposit button clicked');
   const depositAmount = document.getElementById('deposit-amount');
   const newDepositAmountString = depositAmount.value;
   const newDepositAmount = parseFloat(newDepositAmountString);
   //
   depositAmount.value = '';
   if(isNaN(newDepositAmount)){
   alert('Please Provide Valid Number');
   return;
}
  // console.log(newDepositAmount);
  const depositTotal = document.getElementById('deposit-total');
  const previousDepositTotalString = depositTotal.innerText;
  const previousDepositTotal = parseFloat(previousDepositTotalString);
  //console.log(previousDepositTotal);

  const currentDepositBalance = newDepositAmount + previousDepositTotal;
  depositTotal.innerText =currentDepositBalance;
  /// 
  const balanceTotalElement = document.getElementById('balance-total');
  const balanceTotalElementString = balanceTotalElement.innerText;
  const balanceTotal = parseFloat(balanceTotalElementString);
 //console.log( typeof balanceTotal);

 const totalBalanceElement = balanceTotal + currentDepositBalance ;
 balanceTotalElement.innerText =totalBalanceElement;

})