function kirmizi_yeşil() {
    let hataVar = false;
    // If blokları kontrol ediliyor ve hata varsa true
    if (gelen_fiyat == "" && indirim_orani == "") { hataVar = true; }
    else if (gelen_fiyat <= 0) { hataVar = true; }
    else if (indirim_orani <= 0) { hataVar = true; }
    else if (indirim_orani > 100) { hataVar = true; }

    // Hata varsa kırmızı yap
    if (hataVar) {
        fiyat.style.border = "3px solid darkred";
        indirim.style.border = "3px solid darkred";
        return false;
    } else {
        // Hata yoksa yeşil yap
        fiyat.style.border = "3px solid green";
        indirim.style.border = "3px solid green";
        return true;
    }
}
