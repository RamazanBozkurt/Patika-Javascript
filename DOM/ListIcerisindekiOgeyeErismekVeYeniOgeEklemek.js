let lastChild = document.querySelector("ul#list>li:last-child");
lastChild.innerHTML = "son öge değişti";

let firstChild = document.querySelector("ul#list>li:first-child");
firstChild.innerHTML = "ilk öge değişti";

// yeni öge eklemek
let ulDOM = document.querySelector("ul#list");
let liDOM = document.createElement("li");

// sona ekleme
liDOM.innerHTML = "Kendi oluşturduğumuz öğe";
ulDOM.append(liDOM);    //burada listenin içine kendi oluşturduğumuz öge eklendi.

// başa ekleme
let liDOM2 = document.createElement("li");
liDOM2.innerHTML = "Başa eklenen kendi oluşturduğumuz öge";
ulDOM.prepend(liDOM2);