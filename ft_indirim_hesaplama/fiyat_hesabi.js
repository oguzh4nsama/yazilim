function hesapla() {
    let gelen_fiyat = Number(document.getElementById("fiyat").value);
    let ilk_indirim = Number(document.getElementById("indirimli_fiyat").value);
    let indirimli_fiyat = gelen_fiyat - (gelen_fiyat * ilk_indirim) / 100;

    {
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
                document.querySelector('.main').appendChild(kart);
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
            document.querySelector('.main').appendChild(kart);
        }

        else {
            alert("Eksik ya da yanlış tuşlama yaptınız, lütfen geçerli tuşlama yapınız.");
        }
    }
}
