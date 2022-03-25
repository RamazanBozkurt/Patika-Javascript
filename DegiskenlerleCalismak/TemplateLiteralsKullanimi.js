let username = "Ramazan";
const DOMAIN = "kodluyoruz.org";
let email = username + "@" + DOMAIN;

let info = `Merhaba ${username} sitemize hoşgeldin. 
Mail adresin : ${email}
Mail adresinin uzunluğu : ${email.length}
Günün saat bilgisi : ${new Date().getHours()}.${new Date().getMinutes()}
`;

console.log(info);