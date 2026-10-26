1. Kullandığım promptlar
Prompt 1 - Kodu anlama

Amaç: Mevcut HTML ve CSS yapısını anlamak, arama özelliği için plan almak. Dosyaları değiştirmeden önce neyin nerede olduğunu görmek istedim.

HTML ve JavaScript öğrenmeye yeni başladım. index.html, etkinlikler.html, hakkimizda.html ve style.css dosyalarını incele. Etkinlik kartlarının hangi HTML bölümünde oluştuğunu ve CSS ile nasıl göründüğünü açıkla. Mevcut tasarımı koruyarak etkinlik başlıklarında arama yapabileceğim bir özellik için kısa bir plan öner. Henüz dosyaları değiştirme. Hangi dosyalarda değişiklik gerekeceğini ve özelliği nasıl test edeceğimi açıkla. En fazla 5 madde yaz.

Sonuç: Etkinlik kartlarının etkinlikler.html içindeki article yapılarında olduğunu, görünümlerinin ise style.css ile verildiğini öğrendim. Arama için etkinlikler.html, style.css ve yeni bir script.js dosyasında değişiklik yapmam gerektiğini fark ettim.

Prompt 2 - İçeriği kişiselleştirme

Amaç: Siteyi kendi konuma uyarlamak ve en az 5 özgün etkinlik kartı hazırlamak.

Siteyi Oyun temalı bir kampüs topluluğuna uyarla. index.html, etkinlikler.html ve hakkimizda.html dosyalarındaki metinleri bu konuya göre güncelle. etkinlikler.html içinde mevcut article yapısını kullanarak toplam 5 özgün etkinlik kartı olsun. Her kartta başlık, tarih, yer ve açıklama bulunsun. Başlıklar birbirinden farklı olsun. Navigation menüsünü ve bağlantıları koru. Yeni paket veya framework ekleme. Değişen satırları açıkla.

Sonuç: Üç sayfanın metinlerini kendi konuma göre güncelledim ve etkinlik sayısını 5'e çıkardım. Menü bağlantılarının bozulmadığını kontrol ettim.

Prompt 3 - Arama özelliği

Amaç: Etkinlik başlıklarını yazdıkça filtreleyen, sonuç sayısını gösteren ve Temizle düğmesi olan arama özelliğini eklemek.

etkinlikler.html için başlığa göre arama ekle. Yazdıkça filtrele. Girdiyi trim() ile temizle ve toLocaleLowerCase('tr-TR') ile küçük harfe çevir. Kart başlıklarını (h2) da aynı şekilde karşılaştır. Görünen etkinlik sayısını "X etkinlik gösteriliyor." şeklinde yaz. Sonuç yoksa "Aramanıza uygun etkinlik bulunamadı." mesajını göster. "Temizle" düğmesi aramayı boşaltsın ve tüm etkinlikleri geri getirsin. Yalnızca boşluk yazılırsa tüm etkinlikler görünsün. Arama input'u için açıklayıcı bir label ekle. JavaScript için script.js dosyasını oluştur ve defer ile bağla. style.css'e input, buton ve mobil (390 px, yatay taşma olmayacak) düzen için gerekli stilleri ekle. Yalnızca ilgili HTML, CSS ve JS'i değiştir. Paket kurma. Önce kısa planını açıkla, sonra uygula.

Sonuç: Copilot'un önerdiği planı okuduktan sonra uygulamasına izin verdim. script.js dosyasını oluşturdum, etkinlikler.html içine label, arama alanı, sayaç ve boş sonuç mesajını ekledim, style.css dosyasını da bu alanlara göre düzenledim.

2. Bir AI önerisinin değerlendirilmesi

Copilot arama için [her tuş vuruşunda çalışan input event'i / kart başlıklarını h2 ile karşılaştıran yapı] önerdi. Bu öneriyi kabul ettim, çünkü kullanıcı yazdıkça sonuçların anında güncellenmesi istenen davranıştı.

Diff'i incelerken [Copilot'un fazladan eklediği bir stil / ilgisiz bir dosya değişikliği / toLowerCase() kullanımı] dikkatimi çekti. Bunu değiştirdim / geri aldım, çünkü [Türkçe harflerde I/ı ve İ/i sorunu yaşamamak için toLocaleLowerCase('tr-TR') kullanmam gerekiyordu / görev kapsamının dışındaydı].

3. Kod açıklamaları
Event listener
js
searchInput.addEventListener('input', filterEvents);

Event listener, sayfada olan bir olayı dinleyen koddur. Burada arama kutusuna yazı yazılmasını dinliyorum. input olayı kutunun içeriği her değiştiğinde tetiklenir. Bu yüzden Enter'a basmama gerek kalmadan, yazdıkça filterEvents fonksiyonu çalışır ve kartlar anında güncellenir.

Filtreleme koşulu
js
const matches = title.includes(query);
card.hidden = !matches;

Bu koşulla kartın başlığının aradığım ifadeyi içerip içermediğini kontrol ediyorum. İçeriyorsa matches true olur ve kart görünür kalır. İçermiyorsa card.hidden true olur ve kart gizlenir. Başlığı ve aranan ifadeyi önce trim() ile baştaki ve sondaki boşluklardan temizleyip toLocaleLowerCase('tr-TR') ile küçük harfe çevirdiğim için büyük/küçük harf farkı sonucu etkilemez. Arama kutusu boşsa boş ifade her başlığın içinde bulunduğundan tüm kartlar görünür.

4. Not

Copilot'un yazdığı kodu çalıştırmadan kabul etmedim. Her değişikliği Source Control'deki diff görünümünde inceledim, tarayıcıda denedim ve TEST_NOTLARI.md dosyasındaki altı testle doğruladım.