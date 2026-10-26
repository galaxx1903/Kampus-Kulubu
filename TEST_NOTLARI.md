# Test Notları

Testleri tarayıcıda (python3 -m http.server 8000 ile) çalıştırdım. Her testte arama alanını ve sayacı kontrol ettim.

| Test | Girdi-işlem | Beklenen sonuç | Gerçekleşen sonuç | Geçti-Kaldı |
|---|---|---|---|---|
| 1. Başlığın tamamını veya bir kısmını arama | Arama alanına önce `Seviye Tasarımı Atölyesi`, sonra `Tasarımı` yazdım. | Tam başlık aramasında ilgili kart; kısmi aramada eşleşen kart görünür. Görünen etkinlik sayısı güncellenir. | İki aramada da yalnızca "Seviye Tasarımı Atölyesi" kartı göründü. Sayaç "1 etkinlik gösteriliyor." yazdı. | Geçti |
| 2. Aynı kelimeyi büyük ve küçük harfle arama | `KAMPÜS` ve `kampüs` ifadelerini ayrı ayrı yazdım. | Her iki aramada da aynı eşleşen kartlar görünür. | İki aramada da yalnızca "Kampüs E-spor Takım Günü" kartı göründü. Sayaç "1 etkinlik gösteriliyor." yazdı. | Geçti |
| 3. Hiçbir başlıkta olmayan ifade yazma | Arama alanına `uzay yarışı` yazdım. | Kart kalmaz, `0 etkinlik gösteriliyor.` ve `Aramanıza uygun etkinlik bulunamadı.` mesajı görünür. | Hiç kart görünmedi. Sayaç "0 etkinlik gösteriliyor." yazdı ve "Aramanıza uygun etkinlik bulunamadı." mesajı çıktı. | Geçti |
| 4. Yalnızca boşluk yazma ve Temizle'ye basma | Arama alanına birkaç boşluk yazdım; ardından `Temizle` düğmesine bastım. | Boşluk girildiğinde tüm etkinlikler görünür. Temizle aramayı boşaltır ve tüm kartları geri getirir. | Boşluk yazınca 5 kart da göründü. Temizle'ye basınca arama alanı boşaldı, 5 kart göründü ve sayaç "5 etkinlik gösteriliyor." yazdı. | Geçti |
| 5. Üç sayfanın menü bağlantılarını açma | Ana Sayfa, Etkinlikler ve Hakkımızda menü bağlantılarını sırayla açtım. | Her bağlantı doğru sayfayı açar ve sayfalar arasında menüyle gezinilebilir. | Üç bağlantı da doğru sayfayı açtı. Her sayfada menü çalıştı ve aktif sayfa altı çizili göründü. | Geçti |
| 6. 390 px genişlikte ve Tab ile kontrol | Görüntü alanını 390 px genişliğe ayarladım; Tab ile arama alanına ve Temizle düğmesine ilerledim. | Yatay taşma olmaz. İki kontrol de klavyeyle erişilebilir ve odak göstergesi görünür. | Yatay kaydırma çıkmadı, kartlar tek sütunda göründü. Tab ile önce arama alanına, sonra Temizle düğmesine ulaştım ve sarı odak çerçevesi göründü. | Geçti |

## Hata düzeltme

Testlerde kaldığım bir durum olmadı, bu yüzden ek düzeltme yapmadım.
