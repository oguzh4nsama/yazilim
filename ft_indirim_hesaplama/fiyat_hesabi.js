function hesapla() {
    let fiyat1 = Number(document.getElementById("fiyat").value);
    let indirim1 = Number(document.getElementById("indirim").value);
    let indirim = fiyat1 - (fiyat1 * indirim1) / 100;

    // Geçerli girişleri kontrol et
    if (isNaN(fiyat1) || isNaN(indirim1) || fiyat1 <= 0 || indirim1 < 0) {
        alert("Lütfen geçerli bir fiyat ve indirim oranı girin.");
        return;
    }

    if (indirim > 0) {
        // İndirimli fiyatı göster
        document.getElementById("cikti").innerHTML = "Fiyat: " + indirim;

        // Kart elemanını oluştur ve .item3 alanına ekle
        let kart = document.createElement("div");
        kart.id = "kart_divi";
        kart.className = "kart_class";

        // İndirim değerini text node olarak oluştur ve kart'a ekle
        let textNode = document.createTextNode(indirim.toFixed(2)); // İndirimli fiyatı 2 ondalıklı şekilde göster
        kart.appendChild(textNode);

        // kart'ı .item3 içerisine ekle
        document.querySelector('.item3').appendChild(kart);
    } else if (indirim === 0) {
        // İndirim 0 ise
        document.getElementById("cikti").innerHTML = "Fiyat: 0";

        // Kart elemanını oluştur ve .item3 alanına ekle
        let kart = document.createElement("div");
        kart.id = "kart_divi";
        kart.className = "kart_class";

        // Kartı .item3 içerisine ekle
        document.querySelector('.item3').appendChild(kart);
    } else {
        // Hatalı giriş yapıldığında kullanıcıyı uyar
        alert("Eksik ya da yanlış bir değer girdiniz. Lütfen geçerli bir giriş yapın.");
    }
}
