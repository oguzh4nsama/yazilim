function hesapla() {
    let fiyat1 = Number(document.getElementById("fiyat").value);
    let indirim1 = Number(document.getElementById("indirim").value); // indirimi çekiyor
    let indirim = fiyat1 - (fiyat1 * indirim1) / 100; {
        if (indirim > indirim1) {
            
            let kart = document.createElement("div");
            kart.id = "kart_divi";
            kart.className = "kart_class";
        
        
            document.body.appendChild(kart);
            document.getElementById("cikti").innerHTML = "sonuc: " + indirim;
        }
        else {
            alert("Eksik ya da yanlış tuşlama yaptınız.");
        }
    }
}