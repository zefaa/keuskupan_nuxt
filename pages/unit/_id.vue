<template>
  <!-- static -->
  <div class="main-container mx-auto">
    <section class="unit-section mt-6">
      <h1 class="text-center page-title mx-auto">
        Unit Karya Pendidikan
      </h1>
      <div class="d-flex flex-column mx-auto card-container mt-6">
        <!--ambil data yang ada di dataList-->
        <CardUnit
          v-for="(item, i) in dataList"
          :key="i"
          :item="item"
          class="dflex mx-auto"
        />
      </div>
    </section>
  </div>
</template>

<script>
export default {

  // script
  data: () => ({
    dataList: [
      {
        text: 'Sejak abad  19  gereja Katolik mencari cara untuk memajukan masyarakat sebagai wujud pengamalan iman bagi masyarakat Indonesia.  Tiga bidang yang dianggap strategis untuk memajukan masyarakat adalah :  Pendidikan, Kesehatan dan Sosial.'
      },
      {
        title: '1. Yayasan Bhakti Luhur ',
        textItem: '(Tarekat Sekuler Asosiasi Lembaga Misionaris Awam)',
        address: 'Jl. Seruni 8, MALANG,',
        contact: 'Telp. (0341)484236 491672,',
        mail: 'Fax (0341)485076'
      },
      {
        textItem: '1.1 SLB Bhakti Luhur',
        address: 'Jl. Ahmad Yani 17 MADIUN 63121, ',
        contact: 'Telp. (0351) 472621, ',
        mail: 'Email: slbbhaktiluhur@ymail.com'
      },
      {
        textItem: '1.2 SDK Bhakti Luhur',
        address: 'Jl. Ahmad Yani 17 MADIUN 63121, ',
        contact: 'Telp. (0351) 463162 '

      },
      {
        title: '2. YAYASAN DHARMA IBU WKRI ST. MIKAEL, PERAK',
        address: 'Jl. Tanjung Sadari 47, SURABAYA 60177,',
        contact: 'Telp. (031) 3573166,'
      },
      {
        textItem: '2.1. TKK Indriyasana I',
        address: 'Jl. Tanjung Sadari 47, SURABAYA 60177,',
        contact: 'Telp. (031) 3573166,'
      }
    ],

    items: [
      {
        text: 'Beranda',
        disabled: false,
        href: '/'
      },
      {
        text: 'Artikel',
        disabled: true,
        href: ''
      }
    ]
  })

}
</script>
