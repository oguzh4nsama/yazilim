<link rel="stylesheet" href="fiyat_arayüzü.html"></link>
let fiyat = document.getElementById("fiyat");
let indirim = document.getElementById("indirim"); //indirimi çekiyo
function hesapla() {  // tıklanınca napıcağını söylüyo

    let fiyat_miktari = fiyat.value; //değerini alıyo
    let indirim_miktari = indirim.value; //değerini alıyo
    let indirimli_fiyat = fiyat_miktari - (fiyat_miktari * indirim_miktari / 100);
    fiyat_miktari = document.getElementById("cikti").innerHTML = Text; //çıktı.
}