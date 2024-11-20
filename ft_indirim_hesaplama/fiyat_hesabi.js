function hesapla() {
    let fiyatInput = document.getElementById("fiyat");
    let indirimInput = document.getElementById("indirimli_fiyat");
    let gelen_fiyat = Number(fiyatInput.value);
    let indirim = Number(indirimInput.value);
    let indirimli_fiyat = gelen_fiyat - (gelen_fiyat * indirim) / 100;
    let uyari = document.getElementById("yanlis_cikti");
    uyari.innerHTML = "";
    if (gelen_fiyat == "" && indirim == "") {
        fiyatInput.style.border = "3px solid darkred";
        indirimInput.style.border = "3px solid darkred";
        uyari.innerHTML = "Lütfen ürün fiyatını ve indirimini doldurun.";
        return;
    }
    if (gelen_fiyat <= 0) {
        fiyatInput.style.border = "3px solid darkred";
        uyari.innerHTML = "Lütfen ürün fiyatını pozitif bir değer giriniz.";
        return;
    }
    if (indirim <= 0) {
        indirimInput.style.border = "3px solid darkred";
        uyari.innerHTML = "Lütfen indirim oranını pozitif bir değer giriniz.";
        return;
    }
    if (indirim > 100) {
        indirimInput.style.border = "3px solid darkred";
        uyari.innerHTML = "Girilen indirim oranı 100'den büyük olamaz.";
        return;
    }
    fiyatInput.style.border = "3px solid green";
    indirimInput.style.border = "3px solid green";
    fiyatInput.value = "";
    indirimInput.value = "";
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

    
    let indirim_hali = document.createTextNode("Yapılan indirim: " + indirim.toFixed(2) + " TL");
    kart.appendChild(indirim_hali);

    document.querySelector(".kutular").appendChild(kart);
}
