var nevHiba = document.getElementById('nev-hiba');
var cegHiba = document.getElementById('ceg-hiba');
var emailHiba = document.getElementById('email-hiba');
var telefonHiba = document.getElementById('telefon-hiba');
var szekhelyHiba = document.getElementById('szekhely-hiba');
var adoszamHiba = document.getElementById('adoszam-hiba');
var cegjegyzekszamHiba = document.getElementById('cegjegyzekszam-hiba');
var jelszoHiba = document.getElementById('jelszo-hiba');
var regisztracioHiba = document.getElementById('regisztracios-hiba');
let subMenu = document.getElementById("subMenu");
function toggleMenu(){
        subMenu.classList.toggle("open-menu");
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
    nevHiba.innerHTML ='<i>&#10004</i>';
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
    telefonHiba.innerHTML ='<i>&#10004</i>';
    return true;
}
function validateCompany(){
    var company = document.getElementById('contact-company').value;
    if(company.length == 0){
        cegHiba.innerHTML='Cég szükséges';
        return false;
    }
    cegHiba.innerHTML ='<i>&#10004</i>';
    return true;
}
function validateEmail(){
    var email = document.getElementById('contact-email').value;
    if(email.length == 0){
        emailHiba.innerHTML='email cím szükséges';
        return false;
    }
    if(!email.match(/^[A-Za-z0-9+_.-]+@(.+)$/)){
        emailHiba.innerHTML='Helytelen formátum';
        return false;
    }
    emailHiba.innerHTML ='<i>&#10004</i>';
    return true;
}
function validateArchdeaconate(){
    var companyArchdeaconate = document.getElementById('contact-companyarchdeaconate').value;
    if(companyArchdeaconate.length == 0){
        szekhelyHiba.innerHTML='Székhely szükséges';
        return false;
    }
    szekhelyHiba.innerHTML ='<i>&#10004</i>';
    return true;
}
function validateTaxnumber(){
    var companytaxnumber = document.getElementById('contact-taxnumber').value;
    if(companytaxnumber.length == 0){
        adoszamHiba.innerHTML='Adószám szükséges';
        return false;
    }
    adoszamHiba.innerHTML ='<i>&#10004</i>';
    return true;
}
function validateCompanyregnum(){
    var companyregnum = document.getElementById('contact-companyregnum').value;
    if(companyregnum.length == 0){
        cegjegyzekszamHiba.innerHTML='Adószám szükséges';
        return false;
    }
    cegjegyzekszamHiba.innerHTML ='<i>&#10004</i>';
    return true;
}
function validatePassword(){
    var pasword = document.getElementById('contact-password').value;
    if(pasword.length == 0){
        jelszoHiba.innerHTML='Jelszó szükséges';
        return false;
    }
    jelszoHiba.innerHTML ='<i>&#10004</i>';
    return true;
}
function validateForm(){
    regisztracioHiba.innerHTML='Regisztrációs hiba';
    if(!validateName() || !validatePhone() || !validateCompany() || !validateEmail() || !validateArchdeaconate() || !validateTaxnumber() || !validateCompanyregnum() || !validatePassword() ){
        alert("Sikertelen regisztráció")
        return false;
    }
    else{
        alert ("Sikeres regisztáció")
    }
}
document.getElementById("tervezesbutton").onclick = function () {
    location.href = "logintervezes_1.html";
}
function megrendeles(){
    alert("Rendelését befogadtuk!");
}
function kosar(){
    alert("Megrendelése bekrült a kosárba!");
}
