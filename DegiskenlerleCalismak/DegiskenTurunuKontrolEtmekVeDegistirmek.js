// typeof() fonksiyonu ile değişkenin veri tipi öğrenilebilir.

console.log(typeof("11"));


// string ifadeyi in ve float a dönüştürmek
let number1 = "11";
number1 = parseInt(number1);
console.log("number1 : ", number1, typeof(number1));      //OUTPUT : number1 :  11 number


let number2 = "11px";
number2 = parseInt(number2);
console.log("number2 : ", number2, typeof(number2));      //OUTPUT : number2 :  11 number


let number3 = "px11px";
number3 = parseInt(number3);
console.log("number3 : ", number3, typeof(number3));      //OUTPUT : number3 :  NaN number


// number veri tipini string e dönüştürmek
let number4 = 55;
number4 = String(number4);    
// veya
number4 = number4.toString();
console.log("number4 : ", number4, typeof(number4))