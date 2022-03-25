let isActive = false;
isActive = true;
console.log(isActive);

let userName;
let isUserName = Boolean(userName);
console.log(isUserName);    // false döner çünkü userName değişkeni boş

Boolean("1");               // true
Boolean("");                // false
Boolean("0");               // true
