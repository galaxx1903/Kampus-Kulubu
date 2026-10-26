# Test Notları

| Test | Girdi-işlem | Beklenen sonuç | Gerçekleşen sonuç | Geçti-Kaldı |
|---|---|---|---|---|
| 1. Başlığın tamamını veya bir kısmını arama | Arama alanına önce `Seviye Tasarımı Atölyesi`, sonra `Tasarımı` yaz. | Tam başlık aramasında ilgili kart; kısmi aramada eşleşen kart görünür. Görünen etkinlik sayısı güncellenir. |  |  |
| 2. Aynı kelimeyi büyük ve küçük harfle arama | `KAMPÜS` ve `kampüs` ifadelerini ayrı ayrı yaz. | Her iki aramada da aynı eşleşen kartlar görünür. |  |  |
| 3. Hiçbir başlıkta olmayan ifade yazma | Arama alanına `uzay yarışı` yaz. | Kart kalmaz, `0 etkinlik gösteriliyor.` ve `Aramanıza uygun etkinlik bulunamadı.` mesajı görünür. |  |  |
| 4. Yalnızca boşluk yazma ve Temizle'ye basma | Arama alanına birkaç boşluk yaz; ardından `Temizle` düğmesine bas. | Boşluk girildiğinde tüm etkinlikler görünür. Temizle aramayı boşaltır ve tüm kartları geri getirir. |  |  |
| 5. Üç sayfanın menü bağlantılarını açma | Ana Sayfa, Etkinlikler ve Hakkımızda menü bağlantılarını sırayla aç. | Her bağlantı doğru sayfayı açar ve sayfalar arasında menüyle gezinilebilir. |  |  |
| 6. 390 px genişlikte ve Tab ile kontrol | Görüntü alanını 390 px genişliğe ayarla; Tab ile arama alanına ve Temizle düğmesine ilerle. | Yatay taşma olmaz. İki kontrol de klavyeyle erişilebilir ve odak göstergesi görünür. |  |  |
