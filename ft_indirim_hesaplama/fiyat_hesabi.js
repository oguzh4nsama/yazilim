function hesapla() {
    //fiyat ve indirimi çekme 
    let fiyat = document.getElementById("fiyat");
    let indirim = document.getElementById("indirimli_fiyat");
    let gelen_fiyat = Number(fiyat.value);
    let indirim_orani = Number(indirim.value);

    //işlem
    let indirimli_fiyat = gelen_fiyat - (gelen_fiyat * indirim_orani) / 100;

    //temizleme
    let hata = document.getElementById("yanlis_cikti");
    hata.innerHTML = "";

    //hata belirtisi
    fiyat.style.border = "3px solid darkred";
    indirim.style.border = "3px solid darkred";
    function kirmizi_yeşil() {
        if (gelen_fiyat == "" && indirim_orani == "") {

            hata.innerHTML = "Lütfen ürün fiyatını ve indirimini doldurun.";
            return;
        }
        else if (gelen_fiyat <= 0) {
            hata.innerHTML = "Lütfen ürün fiyatını pozitif bir değer giriniz.";
            return;
        }
        else if (indirim_orani <= 0) {
            hata.innerHTML = "Lütfen indirim oranını pozitif bir değer giriniz.";
            return;
        }
        else if (indirim_orani > 100) {
            hata.innerHTML = "Girilen indirim oranı 100'den büyük olamaz.";
            return;
        }
    }
    //doğru belirtisi  
    fiyat.style.border = "3px solid green";
    indirim.style.border = "3px solid green";

    fiyat.value = "";
    indirim.value = "";

    //indirimli halini düz gösterme
    document.getElementById("cikti").innerHTML = "Fiyat: " + indirimli_fiyat.toFixed(2) + " TL";

    //div br strike yaratma
    let kart = document.createElement("div");
    kart.id = "kart_divi";
    kart.className = "kart_class";
    let bosluk = document.createElement("br");
    let cizgi = document.createElement("strike");

    //indirimsiz hali gelen_Fiyat-fiyat
    cizgi.textContent = "İndirimsiz hali: " + gelen_fiyat.toFixed(2) + " TL";
    kart.appendChild(cizgi);

    //indirimli hali indirim-indirimli_orani
    let son_sonuc = document.createTextNode("Ve indirimli hali: " + indirimli_fiyat.toFixed(2) + " TL");
    kart.appendChild(son_sonuc);
    kart.appendChild(bosluk.cloneNode());

    // yapılan indirim indirim_orani-indirim
    let indirim_hali = document.createTextNode("Yapılan indirim: " + indirim_orani.toFixed(2) + " TL");
    kart.appendChild(indirim_hali);

    document.querySelector(".kutular").appendChild(kart);
}

/* ez*/