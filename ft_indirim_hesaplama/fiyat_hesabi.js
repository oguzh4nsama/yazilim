let fiyat = document.getElementById("fiyat");
let indirim = document.getElementById("indirim"); //indirimi çekiyo
    function hesapla() // tıklanınca napıcağını söylüyo
{
    let indirim = fiyat - (fiyat * indirim) / 100;
    document.getElementById("cikti").innerText = "cikti"+indirim; //çıktı.
}