function buyukbar() {
  alert("Buton çalıştı!");
}
function hesapla() {
  let fiyat = document.getElementById("fiyat");
  let indirim = document.getElementById("indirimli_fiyat");
  let gelen_fiyat = fiyat.value.trim();
  let indirim_orani = indirim.value.trim();
  if (sart_dogru(gelen_fiyat, indirim_orani)) {
    gelen_fiyat = Number(gelen_fiyat);
    indirim_orani = Number(indirim_orani);
    let indirimli_fiyat = gelen_fiyat - (gelen_fiyat * indirim_orani) / 100;
    document.getElementById("cikti").innerHTML = "Fiyat: " + indirimli_fiyat.toFixed(2) + " TL";
    let kart = document.createElement("div");
    kart.id = "kart_divi";
    kart.className = "kart_class";
    let cizgi = document.createElement("strike");
    cizgi.textContent = "İndirimsiz hali: " + gelen_fiyat.toFixed(2) + " TL";
    kart.appendChild(cizgi);
    let bosluk = document.createElement("br");
    let son_sonuc = document.createTextNode("Ve indirimli hali: " + indirimli_fiyat.toFixed(2) + " TL",);
    kart.appendChild(son_sonuc);
    kart.appendChild(bosluk);
    let indirim_hali = document.createTextNode("Yapılan indirim: " + indirim_orani.toFixed(2) + "%",);
    kart.appendChild(indirim_hali);
    document.querySelector(".kutular").appendChild(kart);
    fiyat.value = "";
    indirim.value = "";
  } else {
    document.getElementById("fiyat").style.border = "solid darkred";
    document.getElementById("indirimli_fiyat").style.border = "solid darkred";
  }
}
function sart_dogru(gelen_fiyat, indirim_orani) {
  let hata = document.getElementById("yanlis_cikti");
  hata.innerHTML = ""; // Hata mesajını sıfırla
  if (gelen_fiyat === "" || indirim_orani === "") {
    hata.innerHTML = "Lütfen tüm alanları doldurun.";
    return false;
  }
  if (
    !/^\d+(\.\d+)?$/.test(gelen_fiyat) ||
    !/^\d+(\.\d+)?$/.test(indirim_orani)
  ) {
    hata.innerHTML = "Lütfen geçerli sayısal değerler girin.";
    return false;
  }
  if (Number(gelen_fiyat) <= 0) {
    hata.innerHTML = "Lütfen ürün fiyatını pozitif bir değer giriniz.";
    return false;
  }
  if (Number(indirim_orani) <= 0) {
    hata.innerHTML = "Lütfen indirim oranını pozitif bir değer giriniz.";
    return false;
  }
  if (Number(indirim_orani) > 100) {
    hata.innerHTML = "İndirim oranı 100'den büyük olamaz.";
    return false;
  }
  document.getElementById("fiyat").style.border = " solid green";
  document.getElementById("indirimli_fiyat").style.border = "solid green";
  return true;
}