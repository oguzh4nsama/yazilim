function hesapla() {
    let gelen_fiyat = Number(document.getElementById("fiyat").value);
    let indirim = Number(document.getElementById("indirimli_fiyat").value);
    let indirimli_fiyat = gelen_fiyat - (gelen_fiyat * indirim) / 100;

    if (gelen_fiyat == "" && indirim == "") {
        document.getElementById("fiyat").value = "";
        document.getElementById("indirimli_fiyat").value = "";
        document.getElementById("fiyat").style.border = "3px solid darkred";
        document.getElementById("indirimli_fiyat").style.border = "3px solid darkred";
        document.getElementById("yanlis_cikti").innerHTML = "Lütfen ürün fiyatını ve indirimini doldurun.";
        return;
    }
    else if (gelen_fiyat <= 0) {
        document.getElementById("fiyat").value = "";
        document.getElementById("indirimli_fiyat").value = "";
        document.getElementById("fiyat").style.border = "3px solid darkred";
        document.getElementById("yanlis_cikti").innerHTML = "fiyat ve indirim oranı 0 dan küçük olamaz";
        return;
    }
    else if (indirim <= 0) {
        document.getElementById("fiyat").value = "";
        document.getElementById("indirimli_fiyat").value = "";
        document.getElementById("indirimli_fiyat").style.border = "3px solid darkred";
        document.getElementById("yanlis_cikti").innerHTML = "fiyat ve indirim oranı 0 dan küçük olamaz";
        return;
    }
    else if (!/^\d+$/.test(gelen_fiyat) || !/^\d+$/.test(indirim)) {
        document.getElementById("fiyat").value = "";
        document.getElementById("indirimli_fiyat").value = "";
        document.getElementById("fiyat").style.border = "3px solid darkred";
        document.getElementById("indirimli_fiyat").style.border = "3px solid darkred";
        document.getElementById("yanlis_cikti").innerHTML = "Lütfen sadece sayı giriniz.";
        return;
    }
    else if (indirim > 100) {
        document.getElementById("fiyat").value = "";
        document.getElementById("indirimli_fiyat").value = "";
        document.getElementById("indirimli_fiyat").style.border = "3px solid darkred";
        document.getElementById("yanlis_cikti").innerHTML = "Girilen indirim oranı 100den büyük olamaz";
        return;
    }
    else if (gelen_fiyat == "") {
        document.getElementById("fiyat").value = "";
        document.getElementById("indirimli_fiyat").value = "";
        document.getElementById("fiyat").style.border = "3px solid darkred";
        document.getElementById("yanlis_cikti").innerHTML = "Ürün fiyatını doldurunuz.";
        return;
    }
    else if (indirim == "") {
        document.getElementById("fiyat").value = "";
        document.getElementById("indirimli_fiyat").value = "";
        document.getElementById("indirimli_fiyat").style.border = "3px solid darkred";
        document.getElementById("yanlis_cikti").innerHTML = "Ürün indirimini doldurunuz.";
        return;
    }
    
    if (indirimli_fiyat > 0) {
        document.getElementById("yanlis_cikti").innerHTML = "";
        document.getElementById("cikti").innerHTML = "Fiyat: " + indirimli_fiyat;
        let kart = document.createElement("div");
        document.getElementById("fiyat").style.border = "3px solid green";
        document.getElementById("indirimli_fiyat").style.border = "3px solid green";
        kart.id = "kart_divi";
        kart.className = "kart_class";
        let cizgi = document.createElement("strike");
        cizgi.style.color = "red";
        let bosluk = document.createElement("br");
        document.getElementById("fiyat").value = "";
        document.getElementById("indirimli_fiyat").value = "";
        let son_sonuc = document.createTextNode(" Ve indirimli hali: " + indirimli_fiyat.toFixed(2) + " TL");
        kart.appendChild(son_sonuc);
        kart.appendChild(bosluk);
        let indirim_hali = document.createTextNode("Yapılan indirim: " + indirim.toFixed(2) + " TL");
        kart.appendChild(indirim_hali);
        kart.appendChild(bosluk);
        cizgi.textContent = "İndirimsiz hali: " + gelen_fiyat.toFixed(2) + " TL";
        kart.appendChild(cizgi);
        kart.appendChild(bosluk);
        document.querySelector(".kutular").appendChild(kart);
    }
}    