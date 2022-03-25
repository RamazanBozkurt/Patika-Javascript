// let email = "ramazanbozkurt@gmail.com";
// let firstName = "Ramazan";
// let lastName = "BOZKURT";

// // uzunluk bulmak (length)
// console.log(email.length);

// // ilk karakteri bulmak
// console.log(firstName[0]);
// console.log(firstName.charAt(0));

// // büyük harf ve küçük harf 
// console.log(firstName.toUpperCase());
// console.log(lastName.toLowerCase());

// // string içinde istediğimiz bilgiyi aramak ve yerini bulmak (search)
// console.log(email.search("@"));     // index numarasını verir.
// console.log(email.search("olmayan"));   // olmayan birşey varsa -1 döndürür

// // string ifadenin belli bir yerine kadar almak (slice)
// console.log(email.slice(15));   // 15. indexten sonrasını getirir.
// console.log(email.slice(2, 7));   // 2. indexten 7. indexe olan kadarki kısmı getirir.

// let DOMAIN = email.slice(email.search("@") + 1);    // gmail.com
// let mailType = DOMAIN.slice(0, DOMAIN.indexOf("."));    // gmail
// console.log(mailType);

// // bilgiyi değiştir (replace)
// email = email.replace("gmail.com", "kodluyoruz.org");
// console.log(email);

// // istediğimiz bilgi var mı (includes)
// console.log(email.includes(2));     // false
// console.log(email.includes("zan")); // true (ramaZANbozkurt@mail.com)

// // istenilen bilgiyle başladı mı? bitti mi? (startsWidth, endsWith)
// email.endsWith("kodluyoruz.org");  // true

// // ilk harflerini büyük yapmak
// let fullName = `
// ${firstName[0].toUpperCase()}${firstName.slice(1).toLowerCase()} ${lastName[0].toUpperCase()}${lastName.slice(1).toLowerCase()}
// `;
// console.log(fullName);

// // metni diziye çevirme (split)
// let metin = "Merhaba Dünya";
// metin = metin.split(" ");
// console.log(metin);     // ["Merhaba", "Dünya"]


// ÖRNEK
let url = "www.kodluyoruz.org";
let language = "Java";

language = language.replace("Java", "Javascript");
console.log(language); 

let newUrl = url.slice(url.indexOf(".") + 1);
console.log(newUrl);