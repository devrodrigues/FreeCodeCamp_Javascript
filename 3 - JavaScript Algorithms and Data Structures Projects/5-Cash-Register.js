//Cash Register

/*Problem:
Design a cash register drawer function checkCashRegister() that accepts purchase price 
as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) 
as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status 
key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less 
than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for 
the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in 
coins and bills, sorted in highest to lowest order, as the value of the change key.

Currency Unit	Amount
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (ONE)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)
See below for an example of a cash-in-drawer array:

[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]
*/

//My solution:

function calcChange(diff, cid) {
  let int = Math.trunc(diff);
  let float = diff - int;
  float = Number(float.toFixed(2));

  let hasInt = true;
  let hasFloat = true;

  if (int === 0) {
    hasInt = false;
  }

  if (float === 0) {
    hasFloat = false;
  }

  let arrayChange = [
    ["ONE HUNDRED", 0],
    ["TWENTY", 0],
    ["TEN", 0],
    ["FIVE", 0],
    ["ONE", 0],
    ["QUARTER", 0],
    ["DIME", 0],
    ["NICKEL", 0],
    ["PENNY", 0],
  ];

  cid.reverse();

  const billsValues = [100, 20, 10, 5, 1];

  if (hasInt === true) {
    for (let i = 0; i <= 4; i++) {
      while (cid[i][1] > 0 && int >= billsValues[i]) {
        int -= billsValues[i];
        cid[i][1] -= billsValues[i];
        arrayChange[i][1] += billsValues[i];
      }
    }
  }

  const coinsValues = [0.25, 0.1, 0.05, 0.01];

  if (hasFloat === true) {
    for (let i = 5; i <= 8; i++) {
      while (cid[i][1] > 0 && float >= coinsValues[i - 5]) {
        float -= coinsValues[i - 5];
        float = Number(float.toFixed(2));
        cid[i][1] -= coinsValues[i - 5];
        arrayChange[i][1] += coinsValues[i - 5];
      }
    }
  }

  if ((hasInt && int > 0) || (hasFloat && float > 0)) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else {
    arrayChange = arrayChange.filter((arr) => arr[1] > 0);
    return { status: "OPEN", change: arrayChange };
  }
}

function checkCashRegister(price, cash, cid) {
  let diff = cash - price;
  let totalMoney = 0;

  cid.forEach((arr) => (totalMoney += arr[1]));

  if (Number(totalMoney.toFixed(2)) < diff) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else if (Number(totalMoney.toFixed(2)) === diff) {
    return {
      status: "CLOSED",
      change: cid,
    };
  } else {
    return calcChange(diff, cid);
  }
}

console.log(
  checkCashRegister(3.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.01],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 1],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
  ])
);

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.5],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
  ])
);

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.01],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
  ])
);

//////////////////////////////////////////////////////////////////////

//FreeCodeCamp solution:

/* 1)

// Create an array of objects which hold the denominations and their values
var denom = [
  { name: "ONE HUNDRED", val: 100.0 },
  { name: "TWENTY", val: 20.0 },
  { name: "TEN", val: 10.0 },
  { name: "FIVE", val: 5.0 },
  { name: "ONE", val: 1.0 },
  { name: "QUARTER", val: 0.25 },
  { name: "DIME", val: 0.1 },
  { name: "NICKEL", val: 0.05 },
  { name: "PENNY", val: 0.01 },
];

function checkCashRegister(price, cash, cid) {
  var output = { status: null, change: [] };
  var change = cash - price;

  // Transform CID array into drawer object
  var register = cid.reduce(
    function (acc, curr) {
      acc.total += curr[1];
      acc[curr[0]] = curr[1];
      return acc;
    },
    { total: 0 }
  );

  // Handle exact change
  if (register.total === change) {
    output.status = "CLOSED";
    output.change = cid;
    return output;
  }

  // Handle obvious insufficient funds
  if (register.total < change) {
    output.status = "INSUFFICIENT_FUNDS";
    return output;
  }

  // Loop through the denomination array
  var change_arr = denom.reduce(function (acc, curr) {
    var value = 0;
    // While there is still money of this type in the drawer
    // And while the denomination is larger than the change remaining
    while (register[curr.name] > 0 && change >= curr.val) {
      change -= curr.val;
      register[curr.name] -= curr.val;
      value += curr.val;

      // Round change to the nearest hundreth deals with precision errors
      change = Math.round(change * 100) / 100;
    }
    // Add this denomination to the output only if any was used.
    if (value > 0) {
      acc.push([curr.name, value]);
    }
    return acc; // Return the current change_arr
  }, []); // Initial value of empty array for reduce

  // If there are no elements in change_arr or we have leftover change, return
  // the string "Insufficient Funds"
  if (change_arr.length < 1 || change > 0) {
    output.status = "INSUFFICIENT_FUNDS";
    return output;
  }

  // Here is your change, ma'am.
  output.status = "OPEN";
  output.change = change_arr;
  return output;
}

// test here
checkCashRegister(19.5, 20.0, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90.0],
  ["FIVE", 55.0],
  ["TEN", 20.0],
  ["TWENTY", 60.0],
  ["ONE HUNDRED", 100.0],
]);

*/
