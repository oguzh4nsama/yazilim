function hesapla() {
    let fiyat1 = Number(document.getElementById("fiyat").value);
    let indirim1 = Number(document.getElementById("indirim").value); // indirimi çekiyor
    let indirim = fiyat1 - (fiyat1 * indirim1) / 100;
    if (indirim < fiyat1) {
        document.getElementById("cikti").innerText = "fiyat: " + indirim; // çıktı

        if (indirim == indirim) { //2. durum için
            let kart = document.createElement("div");
            kart.id = "kart_divi";
            kart.className = "kart_class";
            kart.style.backgroundColor = "black";
            kart.style.width = "100px";
            kart.style.height = "100px";
            kart.style.position = "absolute";
            kart.style.left = "610px";
            kart.style.top = "450px";
            kart.style.zIndex = "1";
            kart.style.margin = "1px";
            document.body.appendChild(kart);
            let paragraf = document.createElement("p");
            paragraf.style.zIndex = "2";
            paragraf.id = "soncikti";
            paragraf.style = "burlywood";
            document.getElementById("soncikti").innerHTML = "sonuc" + indirim;
            
        }       
        else if(indirim < 0){
            alert("matamatik öğrenirmisin >:<");
        }
    } else {
        alert("Eksik ya da yanlış tuşlama yaptınız.");
    }
}
