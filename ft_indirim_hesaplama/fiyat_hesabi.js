function hesapla() {
    let fiyat = document.getElementById("fiyat");
    let indirim = document.getElementById("indirimli_fiyat");
    let gelen_fiyat = Number(fiyat.value);
    let indirim_orani = Number(indirim.value);
    let indirimli_fiyat = gelen_fiyat - (gelen_fiyat * indirim_orani) / 100;
    let hataMesaji = document.getElementById("yanlis_cikti");
    hataMesaji.innerHTML = "";

    if (gelen_fiyat == "" && indirim_orani == "") {
        fiyat.style.border = "3px solid darkred";
        indirim.style.border = "3px solid darkred";
        hataMesaji.innerHTML = "Lütfen ürün fiyatını ve indirimini doldurun.";
        return;
    }
    if (gelen_fiyat <= 0) {
        fiyat.style.border = "3px solid darkred";
        hataMesaji.innerHTML = "Lütfen ürün fiyatını pozitif bir değer giriniz.";
        return;
    }
    if (indirim_orani <= 0) {
        indirim.style.border = "3px solid darkred";
        hataMesaji.innerHTML = "Lütfen indirim oranını pozitif bir değer giriniz.";
        return;
    }
    if (indirim_orani > 100) {
        indirim.style.border = "3px solid darkred";
        hataMesaji.innerHTML = "Girilen indirim oranı 100'den büyük olamaz.";
        return;
    }

    fiyat.style.border = "3px solid green";
    indirim.style.border = "3px solid green";
    fiyat.value = "";
    indirim.value = "";
    document.getElementById("cikti").innerHTML = "Fiyat: " + indirimli_fiyat.toFixed(2) + " TL";

    let kart = document.createElement("div");
    kart.id = "kart_divi";
    kart.className = "kart_class";

    let bosluk = document.createElement("br");

    let cizgi = document.createElement("strike");
    cizgi.style.color = "red";
    cizgi.textContent = "İndirimsiz hali: " + gelen_fiyat.toFixed(2) + " TL";
    kart.appendChild(cizgi);
    kart.appendChild(bosluk.cloneNode());

    let son_sonuc = document.createTextNode("Ve indirimli hali: " + indirimli_fiyat.toFixed(2) + " TL");
    kart.appendChild(son_sonuc);
    kart.appendChild(bosluk.cloneNode());

    let indirim_hali = document.createTextNode("Yapılan indirim: " + indirim_orani.toFixed(2) + " TL");
    kart.appendChild(indirim_hali);

    document.querySelector(".kutular").appendChild(kart);
}
