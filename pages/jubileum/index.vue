<template>
  <div class="main-container mx-auto">
    <section class="gallery-section mt-6">
      <h1 class="text-center page-title mx-auto">
        Jubileum
      </h1>
      <div class="mx-auto card-container py-5 mt-6">
        <div class="d-flex justify-space-between">
          <v-col
            v-for="(item, i) in dataList"
            :key="i"
          >
            <v-img
              v-for="(item, i) in images"
              :key="i"
              :src="item.src"
              class="post-image"
            />

            <LabelContainerCard
              :item="item"
              class="dflex mx-auto"
            />

            <v-card-title class="card-title primary--text">
              {{ item.title }}
            </v-card-title>
          </v-col>
        </div>
      </div>
    </section>
    <v-pagination
      v-model="page"
      :length="pages"
      :total-visible="6"
      class="content-pagination mt-5 ml-auto"
      @input="next"
    />
  </div>
</template>

<script>

export default {
  data: () => ({
    dataList: [
      {
        title: 'Edisi 247 tahun XXI Januari 2021'

      },
      {
        title: 'Edisi 248 tahun XXI Februari 2021'

      }

    ],
    images: [
      {
        src: require('@/assets/images/rehan.jpg')
      }

    ],

    items: [
      {
        text: 'Beranda',
        disabled: false,
        href: '/'
      },
      {
        text: 'Galleria',
        disabled: true,
        href: ''
      }
    ]
  })
}
</script>
