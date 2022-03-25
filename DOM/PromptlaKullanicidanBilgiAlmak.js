let fullName = prompt("Adınızı girin", "placeholder");
let greetingUser = document.querySelector("div#greeting-user");

if(fullName) {
    greetingUser.innerHTML = `<h3>Hoşgeldin <strong style="background-color:red">${fullName.toUpperCase()}.</strong></h3>`;
}
else{
    greetingUser.innerHTML = "Hoşgeldin.";
}
