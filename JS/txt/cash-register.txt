function checkCashRegister(price, cash, cid) {
  var denomination = [["PENNY"], ["NICKEL"], ["DIME"], ["QUARTER"], ["ONE"], ["FIVE"], ["TEN"], ["TWENTY"], ["ONE HUNDRED"]];
  var value = [1, 5, 10, 25, 100, 500, 1000, 2000, 10000];
  var cashier = [];
  var balance=0;
  for (var i=0; i<cid.length; i++) {
    cashier.push(cid[i][1]*100)
    balance+=cid[i][1]*100
  }
  var pushedChange = [0, 0, 0, 0, 0, 0, 0, 0, 0]
  
  var firstcheck = (cash*100-price*100).toFixed(0);
  var flexchange = (cash*100-price*100).toFixed(0);

  for (var k=8; k>=0; k-- ) {
  while (cashier[k]>0 && flexchange>0 &&flexchange>=value[k]) {
      flexchange-=value[k];
      balance-=value[k];
      cashier[k]-=value[k];
      pushedChange[k]+=value[k];
     }
  }
  var pushedChangeCents = [];
  var closedCents =[["PENNY"], ["NICKEL"], ["DIME"], ["QUARTER"], ["ONE"], ["FIVE"], ["TEN"], ["TWENTY"], ["ONE HUNDRED"]];
  for (var i=8; i>=0; i--) {
    if (pushedChange[i]>0) {
      pushedChangeCents.push(denomination[i]);  
    }
  }
  console.log("below is pushedChangeCents")
  console.log(pushedChangeCents)
  console.log("below is pushedChangeCents[0]")
  console.log(pushedChangeCents[0])
  function positiveFilter(value) {
  return value > 0;
  }

  var pushedChangeFilter = pushedChange.filter(positiveFilter);

  for (var i=0; i<pushedChangeFilter.length; i++) {
      pushedChangeCents[i].push(pushedChangeFilter[pushedChangeFilter.length-i-1]/100)
  }

  for (var i=8; i>=0; i--) {
    if (pushedChange[i]>0) {
      closedCents[i].push(pushedChange[i]/100);  
    } else closedCents[i].push(0);
   }

  var mergedChange =[];
  for (var i=0; i<mergedChange.length; i++) {
    mergedChange[i].push(pushedChangeCents[i])
  }
  if (firstcheck<0 || (firstcheck>0 &&flexchange>0)) {
    return {status: "INSUFFICIENT_FUNDS", change: []}
  } else if (flexchange==0 && balance ==0) {
    return {status: "CLOSED", change: closedCents};
    } else return {status: "OPEN", change: pushedChangeCents}
  } 

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])