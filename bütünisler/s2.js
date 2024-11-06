// s2.js dosyası
export const enuzunkelime = (kelime) => {
    // Girilen kelimeyi temizleyip kelimelere ayırır
    const temizlenmisKelime = kelime.replace(/[^a-zA-Z ]/g, ""); 
    const kelimeler = temizlenmisKelime.split(" "); // Boşlukla ayırarak dizi oluşturur
    
    kelimeler.sort((a, b) => b.length - a.length); 
    return kelimeler[0]; // Sıralı kelimeler dizisini döndürür
};
//replace=yer değiştirme girilen değerin yerini değiştirir.
//split=boşluk silme
//lengt=dizinin uzunluğunu sayar sıralar.


