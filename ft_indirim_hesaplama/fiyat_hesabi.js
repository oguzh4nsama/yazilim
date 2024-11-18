function hesapla() {
    let gelen_fiyat = Number(document.getElementById("fiyat").value);
    let ilk_indirim = Number(document.getElementById("indirimli_fiyat").value);
    let indirimli_fiyat = gelen_fiyat - (gelen_fiyat * ilk_indirim) / 100;  
    if (gelen_fiyat=="" && ilk_indirim ==""){
        alert("lütfen ürün fiyatını ve indirimini doldurun.");
        return;
    }
    else if(ilk_indirim > 100){
        alert("girilen indirim oranı 100den büyük olamaz");
        return;
    }
    else if(ilk_indirim<0){
        alert("girilen indirim oranı 0 dan küçük olamaz");
        return;
    }
   else if( gelen_fiyat == ""){
        alert("Ürün fiyatını doldurun.");
        return;
    }
    else if(ilk_indirim == ""){
        alert("Ürün indiriminü doldurun");
        return;
    }
    

        if (indirimli_fiyat > ilk_indirim) {
            document.getElementById("cikti").innerHTML = "Fiyat: " + indirimli_fiyat;
            let kart = document.createElement("div");

            kart.id = "kart_divi";
            kart.className = "kart_class";
            if (indirimli_fiyat > ilk_indirim) {
                document.getElementById("cikti").innerHTML = "Fiyat: " + indirimli_fiyat;
                let kart = document.createElement("div");
                kart.id = "kart_divi";
                kart.className = "kart_class";
                let son_sonuc = document.createTextNode("Ve indirimli hali: " + indirimli_fiyat.toFixed(2) + "\n");
                kart.appendChild(son_sonuc);
                let indirim_hali = document.createTextNode("Yapılan indirim: " + ilk_indirim.toFixed(2) + "\n");
                kart.appendChild(indirim_hali);
                let gelen_hali = document.createTextNode("İndirimsiz hali: " + gelen_fiyat.toFixed(2) + "\n");
                kart.appendChild(gelen_hali);
                document.querySelector('.kutular').appendChild(kart);
                document.getElementById("fiyat").value = "";
                document.getElementById("indirimli_fiyat").value = "";
            }

        }

        else if (indirimli_fiyat > 0) {
            document.getElementById("cikti").innerHTML = "Fiyat: " + indirimli_fiyat;
            let kart = document.createElement("div");
            kart.id = "kart_divi";
            kart.className = "kart_class";
            let son_sonuc = document.createTextNode("Ve indirimli hali: " + indirimli_fiyat.toFixed(2) + "\n");
            kart.appendChild(son_sonuc);
            let indirim_hali = document.createTextNode("Yapılan indirim: " + ilk_indirim.toFixed(2) + "\n");
            kart.appendChild(indirim_hali);
            let gelen_hali = document.createTextNode("İndirimsiz hali: " + gelen_fiyat.toFixed(2) + "\n");
            kart.appendChild(gelen_hali);
            document.querySelector('.kutular').appendChild(kart);
        }



        else if (indirimli_fiyat > 0 || indirimli_fiyat === 0) {
            document.getElementById("cikti").innerHTML = "Fiyat: " + indirimli_fiyat;
            let kart = document.createElement("div");
            kart.id = "kart_divi";
            kart.className = "kart_class";
            let son_sonuc = document.createTextNode("Ve indirimli hali: " + indirimli_fiyat.toFixed(2) + "\n");
            kart.appendChild(son_sonuc);
            let indirim_hali = document.createTextNode("Yapılan indirim: " + ilk_indirim.toFixed(2) + "\n");
            kart.appendChild(indirim_hali);
            let gelen_hali = document.createTextNode("İndirimsiz hali: " + gelen_fiyat.toFixed(2) + "\n");
            kart.appendChild(gelen_hali);
            document.querySelector('.kutular').appendChild(kart);
        }


        else {
            alert("Eksik ya da yanlış tuşlama yaptınız, lütfen geçerli işlem yapınız.");
        }
    }