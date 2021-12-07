<template>
  <div class="main-container mx-auto">
    <section class="gallery-section grey lighten-4 mt-6">
      <h1 class="text-center page-title mx-auto">
        Jubileum
      </h1>
      <div class="mx-auto card-container py-5 mt-6">
        <v-row no-gutters class="inner-contain">
          <v-col
            v-for="(item, i) in dataList"
            :key="i"
            cols="5"
            class="card-column mx-10"
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
        </v-row>
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
