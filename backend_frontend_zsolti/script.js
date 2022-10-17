var nevHiba = document.getElementById('nev-hiba');
var cegHiba = document.getElementById('ceg-hiba');
var emailHiba = document.getElementById('email-hiba');
var telefonHiba = document.getElementById('telefon-hiba');
var regisztracioHiba = document.getElementById('regisztracios-hiba');
let subMenu = document.getElementById("subMenu");
function toggleMenu(){
        subMenu.classList.toggle("open-menu")
}
function myFunction() {
    alert("Sikeresen kijeletkezett!");
};
function validateName(){
    var name = document.getElementById('contact-name').value;
    if(name.length == 0){
        nevHiba.innerHTML='Név szükséges';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nevHiba.innerHTML='Írjon teljes nevet';
        return false;
    }
    nevHiba.innerHTML ='<i><img src="cheked.png"></img></i>';
    return true;
}
function validatePhone(){
    var phone = document.getElementById('contact-phone').value;
    if(phone.length == 0){
        telefonHiba.innerHTML='Telefonszám szükséges';
        return false;
    }
    if(phone.length !== 11){
        telefonHiba.innerHTML='Telefonszám 11 számból áll';
        return false;
    }
    if(!phone.match(/^[0-9]{11}$/)){
        telefonHiba.innerHTML='Helytelen formátum';
        return false;
    }
    telefonHiba.innerHTML ='<i><img src="cheked.png"></img></i>';
    return true;
}
function validateEmail(){
    var email = document.getElementById('contact-email').value;
    if(email.length == 0){
        emailHiba.innerHTML='email cím szükséges';
        return false;
    }
    if(!email.match(/^[A-Za-z]\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailHiba.innerHTML='Helytelen formátum';
        return false;
    }
    emailHiba.innerHTML ='<i><img src="cheked.png"></img></i>';
    return true;
}
function validateForm(){
    if(!validateName() || !validatePhone() || !validateEmail()){
        regisztracioHiba.innerHTML="Regisztrációs hiba"
        return false;
    }
}