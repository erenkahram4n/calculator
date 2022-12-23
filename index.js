// GENEL DEĞİŞKENLER
var durum = false, opt="", sonuc=0;

// NESNELERİN OLUŞTURULMASI
let rakam = document.querySelectorAll(".rakam");
let islem = document.querySelector("#islem");
var opr = document.querySelectorAll(".opr");
let gosterge = document.querySelector("#gosterge");
let btnCE = document.querySelector(".btnCE");
let btnC = document.querySelector(".btnC");
let nokta = document.querySelector(".nokta");
let esit = document.querySelector(".esit");

rakam.forEach(function(element){
    // forEach ile tüm elemanları gezmesini, element ile de hangisi seçiliyse ona işlem yapmasını sağlıyoruz.
    element.onclick = function(){
        // 0 ı kaldırmak için
        if(islem.textContent=="0" || durum==true){
            islem.textContent = "";
        }
            islem.textContent += this.textContent
            durum = false;
    }


})
opr.forEach(function(element){
    element.onclick = function(){
        durum = true; // durum hatalı mı, basılıp basılmadığını kontrol eder.
        var opr = this.textContent
        gosterge.textContent = gosterge.textContent+""+islem.textContent+""+opr;
        // switch case ile işlemler bir defa döner ve bizim istediğimiz kısmı döndürür.
        // switch(opt) === hafızaya alınan işlem
        switch(opt){
            case"+": islem.textContent = (sonuc + Number(islem.textContent));break;
            case"−" : islem.textContent = (sonuc - Number(islem.textContent));break;
            case"÷" : islem.textContent = (sonuc / Number(islem.textContent));break;
            case"×" : islem.textContent = (sonuc * Number(islem.textContent));break;
        }
        sonuc=Number(islem.textContent);
        opt=opr;
    }
})
btnC.onclick = function(){
    islem.textContent = "0";
}
btnCE.onclick = function(){
    islem.textContent = "0";
    gosterge.textContent = "";
    sonuc=0;
    opt="";
}
esit.onclick = function(){
    gosterge.textContent="";
    durum=true;
    switch(opt){
        case"+": islem.textContent = (sonuc + Number(islem.textContent));break;
        case"−" : islem.textContent = (sonuc - Number(islem.textContent));break;
        case"÷" : islem.textContent = (sonuc / Number(islem.textContent));break;
        case"×" : islem.textContent = (sonuc * Number(islem.textContent));break;
        default:break;
    }
    sonuc=Number(islem.textContent);
    islem.textContent = sonuc;
    sonuc =0;
    opt="";
}
nokta.onclick = function(){
    if(!durum && !islem.textContent.includes(".")){
        islem.textContent+=".";
    }
    else if(durum){
        // durum hatalıysa 0 yap.
        islem.textContent="0";
    }
    if(!islem.textContent.includes(".")){
        islem.textContent+=".";
    }
    durum=false;
}
