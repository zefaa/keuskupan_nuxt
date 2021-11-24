<template>
  <section class="share-section text-center">
    <h2
      class="mt-16"
    >
      SHARE
    </h2>
    <div>
      <v-btn
        class="ma-5"
        icon
        large
        color="primary"
        :href="'https://www.facebook.com/sharer.php?u=www.keuskupansurabaya.org/' + data.sys.contentType.sys.id + '/' + data.fields.slug"
        target="_blank"
      >
        <v-icon x-large>
          mdi-facebook
        </v-icon>
      </v-btn>
      <v-btn
        class="ma-5"
        icon
        large
        color="primary"
        :href="'mailto:?subject=' + data.fields.title + '&body=www.keuskupansurabaya.org/' + data.sys.contentType.sys.id + '/' + data.fields.slug"
        target="_blank"
      >
        <v-icon x-large>
          mdi-email
        </v-icon>
      </v-btn>
      <v-btn
        class="ma-5"
        icon
        large
        color="primary"
        :href="'https://wa.me/?text=' + data.fields.title + '%0A%0A'
          + 'www.keuskupansurabaya.org/' + data.sys.contentType.sys.id + '/'
          + data.fields.slug"
        target="_blank"
      >
        <v-icon x-large>
          mdi-whatsapp
        </v-icon>
      </v-btn>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    data: Object
  }
}
</script>
