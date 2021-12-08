<template>
  <!-- static -->
  <div class="main-container mx-auto">
    <section class="news-section  mt-6">
      <h1 class="text-center page-title mx-auto">
        Uskup
      </h1>
      <div class="d-flex flex-column mx-auto card-container mt-6">
        <!--ambil data yang ada di dataList-->
        <CardPage
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
        title: 'Mgr. Vincentius Sutikno Wisaksono ',
        subtitle: 'Content',
        url: require('@/assets/images/uskup.jpeg')
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
