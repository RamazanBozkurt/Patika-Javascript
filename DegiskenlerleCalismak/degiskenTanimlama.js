// var ile değişken tanımlamak
var serverName = "api.kodluyoruz.org";
console.log(serverName);

// let ile değişken tanımlamak
let fullName = "Ramazan";
fullName += " BOZKURT";
console.log(fullName);

// const ile değişken tanımlamak
const SERVER_PASSWORD = "asfasfasfasd13213asd";
console.log(SERVER_PASSWORD);

// var ile let farkı

// Burada for döngüsünün içindeki değişken var ile tutulmuştur ve döngünün dışından da ERİŞİLEBİLİR.
function Test() {
    for (var i=0; i<10; i++){
        var varData = "Merhaba";
    }
    console.log(varData);
}

// Buradaysa for döngüsünün içindeki değişken let ile tutulmuştur ve döngünü dışından ERİŞİLEMEZ.
function Test2() {
    for (let i=0; i<10; i++){
        let letData = "Merhaba";
    }
    console.log(letData);       // HATA VERİR.
}