function hesapla() {
    let gelen_fiyat = Number(document.getElementById("fiyat").value);
    let indirim = Number(document.getElementById("indirimli_fiyat").value);
    let indirimli_fiyat = gelen_fiyat - (gelen_fiyat * indirim) / 100;
    if (gelen_fiyat == "" && indirim == "") 
    {
        document.getElementById("yanlis_cikti").innerHTML = "Lütfen ürün fiyatını ve indirimini doldurun.";
        return;
    } 

    else if (indirim > 100) 
    {
        document.getElementById("yanlis_cikti").innerHTML = "Girilen indirim oranı 100den büyük olamaz";
        return;
    } 

    else if (indirim < 0) 
    {
        document.getElementById("yanlis_cikti").innerHTML = "Girilen indirim oranı 0 dan küçük olamaz";
        return;
    } 

    else if (gelen_fiyat == "") 
    {
        document.getElementById("yanlis_cikti").innerHTML = "Ürün fiyatını doldurunuz.";
        return;
    } 

    else if (indirim == "") 
    {
        document.getElementById("yanlis_cikti").innerHTML = "Ürün indirimini doldurunuz.";
        return;
    }

    if (indirimli_fiyat > indirim)
    {
        document.getElementById("cikti").innerHTML = "Fiyat: " + indirimli_fiyat;
        let kart = document.createElement("div");
        document.getElementById("yanlis_cikti").value = "";
        kart.id = "kart_divi";
        kart.className = "kart_class";

        if (indirimli_fiyat > indirim) 
        {
            document.getElementById("cikti").innerHTML = "Fiyat: " + indirimli_fiyat;
            let kart = document.createElement("div");
            kart.id = "kart_divi";
            kart.className = "kart_class";
            let son_sonuc = document.createTextNode("Ve indirimli hali: " + indirimli_fiyat.toFixed(2) + "\n",);
            kart.appendChild(son_sonuc);
            let indirim_hali = document.createTextNode("Yapılan indirim: " + indirim.toFixed(2) + "\n",);
            kart.appendChild(indirim_hali);
            let gelen_hali = document.createTextNode("İndirimsiz hali: " + gelen_fiyat.toFixed(2) + "\n",);
            kart.appendChild(gelen_hali);
            document.querySelector(".kutular").appendChild(kart);
            document.getElementById("fiyat").value = "";
            document.getElementById("indirimli_fiyat").value = "";
            document.getElementById("yanlis_cikti").value = "";
        }
    } 
    else if (indirimli_fiyat > 0) 
    {
        document.getElementById("cikti").innerHTML = "Fiyat: " + indirimli_fiyat;
        let kart = document.createElement("div");
        kart.id = "kart_divi";
        kart.className = "kart_class";
        let son_sonuc = document.createTextNode("Ve indirimli hali: " + indirimli_fiyat.toFixed(2) + "\n",);
        kart.appendChild(son_sonuc);
        let indirim_hali = document.createTextNode("Yapılan indirim: " + indirim.toFixed(2) + "\n",);
        kart.appendChild(indirim_hali);
        let gelen_hali = document.createTextNode("İndirimsiz hali: " + gelen_fiyat.toFixed(2) + "\n",);
        kart.appendChild(gelen_hali);
        document.querySelector(".kutular").appendChild(kart);
    } 
    else if (indirimli_fiyat > 0 || indirimli_fiyat === 0) 
    {
        document.getElementById("cikti").innerHTML = "Fiyat: " + indirimli_fiyat;
        let kart = document.createElement("div");
        kart.id = "kart_divi";
        kart.className = "kart_class";
        let son_sonuc = document.createTextNode("Ve indirimli hali: " + indirimli_fiyat.toFixed(2) + "\n",);
        kart.appendChild(son_sonuc);
        let indirim_hali = document.createTextNode("Yapılan indirim: " + indirim.toFixed(2) + "\n",);
        kart.appendChild(indirim_hali);
        let gelen_hali = document.createTextNode("İndirimsiz hali: " + gelen_fiyat.toFixed(2) + "\n",);
        kart.appendChild(gelen_hali);
        document.querySelector(".kutular").appendChild(kart);
        document.getElementById("yanlis_cikti").value = "";
    }
     else 
    {
        document.getElementById("yanlis_cikti").innerHTML = "Eksik tuşlama yaptınız, lütfen geçerli işlem yapınız.";
        document.getElementById("yanlis_cikti").value = "";
    }
}

