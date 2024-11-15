function hesapla() {
    let fiyat1 = Number(document.getElementById("fiyat").value);
    let indirim1 = Number(document.getElementById("indirim").value);
    let indirim = fiyat1 - (fiyat1 * indirim1) / 100;

    {   
        if (indirim > indirim1) {
            document.getElementById("cikti").innerHTML = "Fiyat: " + indirim;

            // Kart divi oluştur
            let kart = document.createElement("div");
            kart.id = "kart_divi";
            kart.className = "kart_class";

            // İndirimli fiyatı 2 ondalıklı şekilde yazdır
            let textNode = document.createTextNode(indirim.toFixed(2)); 
            kart.appendChild(textNode);

            // kart div'ini .main içerisine ekle
            document.querySelector('.main').appendChild(kart);
        }

        else if (indirim    = indirim1) { // Eşitlik kontrolü düzeltildi
            document.getElementById("cikti").innerHTML = "Fiyat: " + 0;

            // Kart divi oluştur
            let kart = document.createElement("div");
            kart.id = "kart_divi";
            kart.className = "kart_class";
            let textNode = document.createTextNode(indirim.toFixed(2)); 
            kart.appendChild(textNode);
            // kart div'ini .main içerisine ekle
            document.querySelector('.main').appendChild(kart); 
        }
            
        else {  
            alert("Eksik ya da yanlış tuşlama yaptınız, lütfen geçerli tuşlama yapınız.");
        }       
    }       
}
