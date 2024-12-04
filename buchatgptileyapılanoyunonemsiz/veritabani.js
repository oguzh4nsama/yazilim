// script.js
document.getElementById("registerForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Sayfanın yeniden yüklenmesini engelle
  
    // Formdan verileri al
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    // Verileri JSON formatında hazırla
    const data = {
      name: name,
      email: email,
      password: password,
    };
  
    // Fetch API ile backend'e gönder
    fetch("http://localhost:3000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        alert(result.message); // Kullanıcıya başarı mesajı göster
      })
      .catch((error) => {
        console.error("Hata:", error);
        alert("Bir hata oluştu.");
      });
  });
  const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");

const app = express();
const port = 3000;

// MySQL bağlantısı
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "testdb",
});

db.connect((err) => {
  if (err) throw err;
  console.log("MySQL Bağlantısı başarılı!");
});

// Middleware
app.use(bodyParser.json());

// Kayıt endpoint'i
app.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
  db.query(sql, [name, email, password], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: "Veritabanına kayıt yapılamadı." });
    } else {
      res.status(200).json({ message: "Kayıt başarılı!" });
    }
  });
});

app.listen(port, () => {
  console.log(`Server çalışıyor: http://localhost:${port}`);
});
