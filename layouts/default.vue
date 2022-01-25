<template>
  <v-app
    dark
  >
    <v-main>
      <v-container
        class="background"
        fluid
        ma-0
        pa-0
        fill-height
      >
        <section class="header-section mx-auto">
          <div class="d-flex title-container justify-center my-md-10">
            <a href="/" class="logo-link">
              <img
                width="170"
                height="170"
                :src="logo"
                class="header-logo"
              >
            </a>
            <div class="d-flex flex-column mx-md-10 align-self-center">
              <a href="/">
                <h1>Gereja Katolik Keuskupan Surabaya</h1>
                <h3 class="mt-2">
                  Catholic Church Diocese of Surabaya
                </h3>
              </a>
            </div>
            <div class="d-flex flex-column align-self-center">
              <a href="/page/seputar-mupas-2019/">
                <img
                  class="mupas-logo"
                  width="120"
                  height="120"
                  :src="logoMupas"
                >
                <p class="mt-2 mb-0 text-center mupas-logo primary--text mupas-text">
                  MUPAS 2019
                </p>
              </a>
            </div>
          </div>
          <v-list class="flex-row nav-list mx-auto justify-center mt-10 mb-1 row-navigation">
            <div data-v-314f53c6="" class="v-list-group flex-grow-0 mx-3">
              <div tabindex="0" aria-expanded="false" role="button" class="v-list-group__header v-list-item v-list-item--link theme--light">
                <div data-v-314f53c6="" class="v-list-item__title px-2">
                  <a href="/">Beranda</a>
                </div>
              </div>
            </div>
            <v-list-group
              v-for="(nav, i) in navItems"
              :key="i"
              class="flex-grow-0 mx-3"
            >
              <template #activator>
                <v-list-item-title class="px-1">
                  {{ nav.name }}
                </v-list-item-title>
              </template>

              <v-list-item
                v-for="(item, j) in nav.list"
                :key="j"
                link
                class="sub-item"
              >
                <a :href="item.link">{{ item.name }}</a>
              </v-list-item>
            </v-list-group>
          </v-list>
          <div class="d-flex flex-row justify-center w-80 mx-auto">
            <div class="d-flex flex-column w-60">
              <div data-v-314f53c6="" class="v-list-group flex-grow-0 ma-2 nav-list">
                <div tabindex="0" aria-expanded="false" role="button" class="v-list-group__header v-list-item v-list-item--link theme--light">
                  <div data-v-314f53c6="" class="v-list-item__title">
                    <p class="mb-0">
                      Beranda
                    </p>
                    <p class="caption font-italic grey--text lighten-4 mb-0">
                      Home
                    </p>
                  </div>
                </div>
              </div>
              <v-list-group
                v-for="(value, i) in columnNav[0]"
                :key="i"
                class="flex-grow-0 ma-2 nav-list"
              >
                <template #activator>
                  <v-list-item-title>
                    <p class="mb-0">
                      {{ navItems[value].name }}
                    </p>
                    <p class="caption font-italic grey--text lighten-4 mb-0">
                      {{ navItems[value].alt }}
                    </p>
                  </v-list-item-title>
                </template>

                <v-list-item
                  v-for="(item, j) in navItems[value].list"
                  :key="j"
                  link
                  class="sub-item"
                >
                  <a :href="item.link">{{ item.name }}</a>
                </v-list-item>
              </v-list-group>
            </div>
            <div class="d-flex flex-column w-60">
              <v-list-group
                v-for="(value, i) in columnNav[1]"
                :key="i"
                class="flex-grow-0 ma-2 nav-list"
              >
                <template #activator>
                  <v-list-item-title>
                    <p class="mb-0">
                      {{ navItems[value].name }}
                    </p>
                    <p class="caption font-italic grey--text lighten-4 mb-0">
                      {{ navItems[value].alt }}
                    </p>
                  </v-list-item-title>
                </template>

                <v-list-item
                  v-for="(item, j) in navItems[value].list"
                  :key="j"
                  link
                  class="sub-item"
                >
                  <a :href="item.link">{{ item.name }}</a>
                </v-list-item>
              </v-list-group>
            </div>
          </div>
        </section>

        <nuxt />

        <!-- footer -->
        <section class="footer-container pt-16 mt-16">
          <div class="d-flex flex-md-row flex-sm-column secondary--text column-container mx-auto">
            <div class="d-flex flex-md-row flex-sm-column mx-auto pt-5">
              <div class="block-title">
                <h3>Hubungi Kami</h3>
                <small class="white--text font-italic">Contact Us</small>
                <p class="mb-2 mt-4">
                  <v-btn
                    class="px-0"
                    text
                    small
                    color="transparent"
                    target="_blank"
                    href="https://www.google.com/maps/dir/-7.2710447,112.807572/Jl.+Mojopahit+No.17,+Keputran,+Kec.+Tegalsari,+Kota+SBY,+Jawa+Timur+60265/@-7.279524,112.7406534,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x2dd7fbc3d76f97e5:0x67fd38514d4e1095!2m2!1d112.74272!2d-7.281811"
                  >
                    <v-icon class="mr-3">
                      mdi-map-marker-check-outline
                    </v-icon>
                    Jl. Mojopahit 17, Surabaya, Jawa Timur
                  </v-btn>
                </p>

                <p class="mb-2 mt-4">
                  <v-btn
                    class="px-0"
                    text
                    small
                    color="transparent"
                    target="_blank"
                    href="https://wa.wizard.id/560167"
                  >
                    <v-icon class="mr-3">
                      mdi-whatsapp
                    </v-icon>
                    0812-8877-0017
                  </v-btn>
                </p>

                <p class="mb-2 mt-4">
                  <v-btn
                    class="px-0"
                    text
                    small
                    color="transparent"
                    target="_blank"
                    href="accounts.google.com"
                  >
                    <v-icon class="mr-3">
                      mdi-email
                    </v-icon>
                    puspassurabaya@gmail.com
                  </v-btn>
                </p>
              </div>
            </div>

            <div class="d-flex flex-md-row flex-sm-column mx-auto pt-5">
              <!-- medsos -->
              <div class="block-title">
                <h3>Media Sosial</h3>
                <small class="white--text font-italic">Social Media</small>
                <div class="d-flex flex-column keuskupan-text column-container ">
                  <p class="mb-2 mt-4">
                    <v-btn
                      class="px-0"
                      text
                      small
                      color="transparent"
                      target="_blank"
                      href="https://www.instagram.com/puspasks/"
                    >
                      <v-icon class="mr-3">
                        mdi-instagram
                      </v-icon>
                      @puspasks
                    </v-btn>
                  </p>
                  <p class="mb-2 mt-4">
                    <v-btn
                      class="px-0"
                      text
                      small
                      color="transparent"
                      target="_blank"
                      href="https://www.youtube.com/channel/UCj5X9XA7iIWUiRfp56Du0XQ"
                    >
                      <v-icon class="mr-3">
                        mdi-youtube
                      </v-icon>
                      Pusat Pastoral Keuskupan Surabaya
                    </v-btn>
                  </p>
                  <p class="mb-2 mt-4">
                    <v-btn
                      class="px-0"
                      text
                      small
                      color="transparent"
                      target="_blank"
                      href="https://www.facebook.com/keuskupan.surabaya/"
                    >
                      <v-icon class="mr-3">
                        mdi-facebook
                      </v-icon>
                      facebook.com/keuskupan.surabaya/
                    </v-btn>
                  </p>

                  <p class="mb-2 mt-4 ">
                    <v-btn
                      class="px-0 "
                      text
                      small
                      color="transparent"
                      target="_blank"
                      href="https://www.keuskupansurabaya.org/page/jubileum/"
                    >
                      <v-icon class="mr-3">
                        mdi-book-open-page-variant-outline
                      </v-icon>
                      keuskupansurabaya.org/page/jubileum
                    </v-btn>
                  </p>
                </div>
              </div>
              <!-- medsos end -->
            </div>
          </div>

          <div class="d-flex flex-md-row flex-sm-column copyright-container mx-auto pt-5">
            <div class="d-flex flex-column keuskupan-text">
              <div
                class="menu-item mt-2"
              >
                <a href="">Kebijakan Kerahasiaan</a>
              </div>
              <div
                class="menu-item mt-2"
              >
                <a href="">Syarat Penggunaan</a>
              </div>
            </div>

            <div class="d-flex flex-column flex-grow-1 keuskupan-text">
              <div
                class="menu-item ml-auto mt-auto"
              >
                <a href="" class="white--text text-subtitle-1 font-weight-medium">
                  &copy; {{ new Date().getFullYear() }} Gereja Katolik Keuskupan Surabaya. Semua hak dilindungi undang-undang.
                </a>
              </div>
              <div
                class="menu-item ml-auto mb-auto"
              >
                <a href="" class="white--text text-subtitle-2 font-weight-medium">
                  &copy; {{ new Date().getFullYear() }} Catholic Church Diocese of Surabaya. All rights reserved.
                </a>
              </div>
            </div>
          </div>
        </section>
        <!-- footer end -->
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'
export default {

  data: () => ({
    pastorals: [
      {
        name: 'Komisi-komisi Bidang Formatio',
        list: [
          {
            name: 'Komisi Keluarga Katolik',
            link: '/page/komisi-keluarga'
          },
          {
            name: 'Komisi Anak Katolik',
            link: '/page/komisi-anak'
          },
          {
            name: 'Komisi Remaja Katolik',
            link: '/page/komisi-remaja'
          },
          {
            name: 'Komisi Orang Muda Katolik',
            link: '/page/komisi-kepemudaan'
          },
          {
            name: 'Komisi Lansia Katolik',
            link: '/page/komisi-lansia'
          },
          {
            name: 'Pastoral Difabel Katolik',
            link: '/page/pastoral-difabel-pastoral-difabel'
          }
        ]
      },
      {
        name: 'Komisi-komisi Bidang Sumber',
        list: [
          {
            name: 'Komisi Kitab Suci',
            link: '/page/komisi-kitab-suci'
          },
          {
            name: 'Komisi Liturgi',
            link: '/page/komisi-liturgi'
          },
          {
            name: 'Komisi Kateketik',
            link: '/page/komisi-kateketik'
          }
        ]
      },
      {
        name: 'Komisi-komisi Bidang Kerasulan Khusus',
        list: [
          {
            name: 'Komisi karya misioner (KKI-KKM)',
            link: '/page/komisi-karya-misioner'
          },
          {
            name: 'Komisi Komunikasi Sosial (KOMSOS)',
            link: '/page/komisi-komunikasi-sosial'
          },
          {
            name: 'Komisi Pendidikan',
            link: '/page/komisi-pendidikan'
          }
        ]
      },
      {
        name: 'Komisi-komisi Bidang Kerasulan Umum',
        list: [
          {
            name: 'Komisi Pengembangan Sosial',
            link: '/page/komisi-karya-misioner'
          },
          {
            name: 'Komisi Kerasulan Awam dalam hubungan antar Agama, Kepercayaan dan Kemasyarakatan',
            link: '/page/komisi-kerawam-agama-kepercayaan-kemasyarakatan'
          }
        ]
      }
    ],

    missions: [
      {
        name: 'Sejarah',
        link: '/page/ardas-sejarah-59enw'
      },
      {
        name: 'Mupas I',
        link: '/page/mupas-i-cwsgg'
      },
      {
        name: 'Mupas II',
        link: '/page/mupas-ii-2qdan'
      }
    ],

    news: [
      {
        name: 'Semua Berita',
        link: '/news'
      }
    ],

    documents: [
      {
        name: 'Semua Dokumen',
        link: '/document'
      }
    ],

    articles: [
      {
        name: 'Semua Artikel',
        link: '/article/'
      }
    ],

    // list menu
    navItems: [
      {
        name: 'Profil',
        alt: 'About Us',
        list: [
          {
            name: 'Uskup',
            link: '/profil/uskup'
          },
          {
            name: 'Perangkat Pastoral Keuskupan',
            link: '/profil/perangkat'
          },
          {
            name: 'Peta Keuskupan',
            link: '/profil/peta'
          },
          // {
          //   name: 'Paroki',
          //   link: '/page/paroki'
          // },
          {
            name: 'Statistik',
            link: '/profil/statistik'
          },
          {
            name: 'Seminari',
            link: '/profil/seminari'
          },
          {
            name: 'Tarekat Hidup Bakti',
            link: '/profil/tarekat-hidup-bakti'
          },
          {
            name: 'Kelompok Kategorial',
            link: '/profil/kelompok-kategorial'
          }
        ]
      },

      {
        name: 'Arah Dasar',
        alt: 'Mission',
        list: [
          {
            name: 'Perjalanan Mupas 2009 Menuju 2019',
            link: '/_page/dari-mupas-2009-menuju-mupas-2019-lxstd'
          },
          {
            name: 'Arah Dasar 2020-2030',
            link: '/_page/arah-dasar-2020-2030'
          },
          {
            name: 'Arah Dasar 2010-2019',
            link: '/_page/ardas-2010-2019'
          },
          {
            name: 'Sinode 1997',
            link: '/_page/hasil-sinode-keuskupan-surabaya-1996'
          }
        ]
      },
      {
        name: 'Karya Pastoral',
        alt: 'Pastoral Ministries',
        list: [
          {
            name: 'Komisi-komisi',
            link: 'pastorals'
          },
          {
            name: 'Unit Karya Pendidikan',
            link: '/_page/unit-karya-pendidikan'
          },
          {
            name: 'Unit Karya Sosial',
            link: '/_page/unit-karya-sosial'
          },
          {
            name: 'Unit Karya Kesehatan',
            link: '/_page/unit-karya-kesehatan'
          },
          {
            name: 'Unit Karya Rumah Bina',
            link: '/_page/unit-karya-rumah-bina'
          },
          {
            name: 'Pastoral Mahasiswa',
            link: '/page_/pastoral-mahasiswa'
          },
          {
            name: 'Pastoral Kaderisasi & Animasi Kristiani',
            link: '/page_/pastoral-kaderisasi-animasi-kristiani'
          },
          {
            name: 'SGPP/Child Protection',
            link: '/profil/sgpp-child-protection'
          },
          {
            name: 'JPIC',
            link: '/_page/JPIC'
          },
          {
            name: 'KARINA',
            link: '/page_/karina'
          },
          {
            name: 'LKD',
            link: '/page_/lkd'
          }
        ]
      },
      {
        name: 'Informasi',
        alt: 'Information',
        list: [
          {
            name: 'Sejarah Gereja Katolik Keuskupan Surabaya',
            link: '/_page/membaca-sejarah-aktual-keuskupan-surabaya'
          },
          {
            name: 'Informasi Sekretariat Keuskupan',
            link: '/_page/sekretariat'
          },
          {
            name: 'Agenda Keuskupan',
            link: ''
          },
          {
            name: 'Berita',
            link: '/news'
          },
          {
            name: 'Galeria',
            link: '/gallery/'
          }
        ]
      },
      {
        name: 'Dokumen',
        alt: 'Downloads',
        list: [

        ]
      }
    ],
    columnNav: [
      [1, 3],
      [0, 2, 4]
    ],
    logo: require('~/assets/logo/logo.png'),
    logoMupas: require('~/assets/logo/logo-mupas.png')
  }),
  computed: {
    ...mapState(['featuredDocument']),
    ...mapState(['featuredNews']),
    ...mapState(['featuredArticle']),
    ...mapState(['address']),
    ...mapState(['phone']),
    ...mapState(['instagram']),
    ...mapState(['facebook'])
  },
  mounted () {
    const featuredDocument = this.featuredDocument
    featuredDocument.forEach((element) => {
      this.navItems[4].list.push({
        name: element.label,
        link: '/category/' + element.slug
      })
      this.documents.push({
        name: element.label,
        link: '/category/' + element.slug
      })
    })
    this.navItems[4].list.push(
      {
        name: 'Semua Artikel',
        link: '/article/'
      }
    )
    const featuredNews = this.featuredNews
    featuredNews.forEach((element) => {
      this.news.push({
        name: element.label,
        link: '/category/' + element.slug
      })
    })
    this.news.push(
      {
        name: 'Galeria',
        link: '/gallery'
      }
    )
    const featuredArticle = this.featuredArticle
    featuredArticle.forEach((element) => {
      this.articles.push({
        name: element.label,
        link: '/category/' + element.slug
      })
    })
  },
  methods: {
    getClass (index) {
      if (index > 0) {
        return 'menu-item mt-2'
      } else {
        return 'menu-item'
      }
    }
  }
}
</script>
<style scoped>
  * {
    font-family: Cormorant,Georgia,serif;
    color: #444;
  }

  .background{
    /* background: url('@/assets/background/background_.jpeg'); */
    box-shadow:inset 0 0 0 2000px rgba(255, 255, 255, 0.6);
    background-size: cover;
    height: 100%;
  }
  /* .container {

  } */
</style>
