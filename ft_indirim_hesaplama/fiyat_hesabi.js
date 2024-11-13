function hesapla() {
    let fiyat1 = Number(document.getElementById("fiyat").value);
    let indirim1 = Number(document.getElementById("indirim").value);
    let indirim = fiyat1 - (fiyat1 * indirim1) / 100;
    {
        if (indirim > indirim1) {
            document.getElementById("cikti").innerHTML = "Fiyat: " + indirim;
            /* ----------------------------------------------------------- */
            let kart = document.createElement("div");
            kart.id = "kart_divi";
            kart.className = "kart_class";
            document.body.appendChild(kart);
            document.createTextNode(indirim);
            kart.appendChild(indirim);
            document.body.appendChild(kart);
        }

        else if (indirim = indirim1) {
            document.getElementById("cikti").innerHTML = "Fiyat: " + 0;
            let kart = document.createElement("div");
            kart.id = "kart_divi";
            kart.className = "kart_class";
            document.body.appendChild(kart); //bodye ekleme(olmuyo).
        }

        else {
            alert("Eksik ya da yanlış tuşlama yaptınız, lütfen geçerli tuşlama yapınız.");
        }
    }
}