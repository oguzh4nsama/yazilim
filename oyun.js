// oyun.js

// Envanter butonuna tıklanıldığında envanter ekranını aç
document.getElementById('inventory-btn').addEventListener('click', function() {
    document.getElementById('main-menu').style.display = 'none'; // Ana menüyü gizle
    document.getElementById('inventory-screen').style.display = 'block'; // Envanteri göster
});

// Geri Dön butonuna tıklanıldığında envanter ekranını kapat
document.getElementById('back-btn').addEventListener('click', function() {
    document.getElementById('inventory-screen').style.display = 'none'; // Envanteri gizle
    document.getElementById('main-menu').style.display = 'block'; // Ana menüyü tekrar göster
});

// Oyun Butonuna Tıklayınca Başlat
document.getElementById('play-btn').addEventListener('click', () => {
    document.getElementById('main-menu').style.display = 'none'; // Ana menüyü gizle
    document.getElementById('game-screen').style.display = 'block'; // Oyun ekranını göster

    // Oyun Başlatılabilir
});

// Çıkış Butonuna Tıklanınca Ana Menüye Dön
document.getElementById('exit-game-btn').addEventListener('click', function() {
    document.getElementById('game-screen').style.display = 'none'; // Oyun ekranını gizle
    document.getElementById('main-menu').style.display = 'block'; // Ana menüyü tekrar göster
});
