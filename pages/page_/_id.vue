<template>
  <div class="main-container mx-auto">
    <section class="body-section mt-6">
      <h1 class="text-center page-title mx-auto">
        pastoral mahasiswa
      </h1>
      <div class="body-image mx-auto my-3">
        <img
          :src="ppm"
        >
      </div>
      <div class="body-card">
        <div class="card-text">
          <div class="mt-6" v-html="content" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {

  // script
  data () {
    return {
      content: '<p>Gereja Katolik (catholica ecclesia) adalah persekutuan seluruh umat beriman yang dipimpin Paus dan Kolegium para uskup (kan. 204 § 2). Gereja Katolik universal dibentuk dari Gereja-gereja partikular. Gereja Katolik (bersama Takhta Suci dan Kolegium Para Uskup) adalah persona moral (persona moralis) atas penetapan Ilahi-ex ordinatione divina (kan. 113 § 1). Gereja lokal (ecclesia localis) istilah ini digunakan untuk menunjuk suatu bagian umat Allah yang dipimpin oleh seorang imam (pelayan tetap). Di setiap Gereja lokal dihadirkan Gereja universal. Karena itulah, Gereja lokal dapat disebut juga Gereja Allah karena disitu ditemukan elemen esensial dari Gereja, yakni pemimpin, teritori tertentu, dan umat beriman. Istilah Gereja lokal dapat  digunakan untuk menyebut paroki tetapi tidak eksklusif hanya untuk paroki saja, karena dapat juga untuk menyebut suatu komunitas lokal lain yang non teritori (LG 28b). Dalam Konsili Vatikan II: “Gereja adalah Umat Allah dalam Kristus yang dipersatukan oleh Roh Kudus. Umat Allah di dunia dipanggil untuk menjadi sakramen, yakni: dalam Kristus menjadi tanda dan sarana persatuan mesra dengan Allah dan kesatuan seluruh umat manusia. (LG 2). Demikian pula ditegaskan bahwa Otoritas “Gereja/Hierarki sebagai Pelayan” (LG 3). Mahasiswa/i Katolik dipanggil pula menjadi sakramen, yakni: berani menghadirkan Kristus demi Kerajaan Allah dimana-mana. Begitu banyak tantangan yang dialami mahasiswa/i Katolik untuk menjadi sakramen di kampus mereka masing-masing, seperti tantangan radikalisme, persekusi, fundamentalisme kelompok agama, hoax ̧ intoleransi. Dari tantangan tersebut dibutuhkan pola pendampingan yang efektif, yakni mendengarkan dan menjawabi kebutuhan konkret iman, ilmu, dan politik kampus yang mereka hadapi. Hal ini menjadi sangat penting demi perkembangan Gereja masa kini dan masa depan. Oleh karena itu, di era millennial ini, Gereja Mahasiswa bisa hadir sebagai sarana persatuan mesra dengan Allah dan menjadi pewarta sukacita Injil. Dengan arah yang demikian, maka saya mengajak rekan imam dan umat untuk memahami Gereja Mahasiswa secara utuh di wilayah Keuskupan Surabaya yang selaras dengan Ardas Keuskupan Surabaya. Semoga buku profil PPMKS (Gereja Mahasiswa) ini menambah pemahaman tentang status Gereja Mahasiswa di Keuskupan Surabaya. Buku profil ini memaparkan beberapa hal diantaranya: Identitas PPMKS, Gereja “Paroki” Mahasiswa, Hakikat & Misi PPMKS, KMK sebagai Wilayah PPMKS, peran PPMKS dalam bidang gerejawi, rekomendasi PPMKS 2019-2029, dan pedoman dewan PPMKS.</p> <p><i>Peringatan Sumpah Pemuda - Surabaya, 28 Oktober 2018</i></p><p><br><b>RD. Yuventius Devi Ghawa</b></br></p><p><b>Romo Kapelan Mahasiswa (Koordinator PPMKS)</b></p>',
      ppm: require('~/assets/images/ppm.jpeg')
    }
  }
}
</script>
