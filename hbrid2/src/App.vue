<style scoped>
.row-custom {
  margin-top: -1% !important;
}

.content-block-title {
  margin: 10px 15px 10px;
  font-size: 15px;
  color: #1F1F9D
}

.img-kanan {
  margin-top: 2px;
  max-height: 140px;
  width: 100%;
  /* width: 100%; */
  /* object-fit: fill; */
  float: right;
  margin-right: -5px;
}

.img-kiri {
  margin-top: 2px;
  max-height: 140px;
  width: 100%;
  /* width: 100%; */
  /* object-fit: fill; */
  float: left;
  margin-left: -5px;
}
</style>

<template>
<!-- App -->
<div id="app">
  <!-- Statusbar -->
  <f7-statusbar></f7-statusbar>
  <!-- <f7-view id="main-view" navbar-through :dynamic-navbar="true" main> -->
  <f7-view id="main-view">
    <f7-pages>
      <f7-page>
        <f7-block-title style="text-align: center">
          Ditlantas Sulawesi</f7-block-title>
        <div class="row" style="margin-top:-20dp;">
          <div class="container">
            <img style="height: 150px; width: 100%; object-fit: contain" src="./assets/poldasulsel/gambarsampel/banner.png" class="img-responsive">
          </div>
        </div>
        <div class="row row-custom">
          <div class="col-50">
            <a v-bind:href="menu[0].url">
                            <img :src="menu[0].img" class="img-kanan">
                        </a>
          </div>
          <div class="col-50">
            <a v-bind:href="menu[1].url">
                            <img :src="menu[1].img" class="img-kiri">
                        </a>
          </div>
        </div>
        <!--  -->
        <div class="row ">
          <div class="col-50">
            <a v-bind:href="menu[2].url">
                            <img :src="menu[2].img" class="img-kanan">
                        </a>
          </div>
          <div class="col-50">
            <a v-bind:href="menu[3].url">
                            <img :src="menu[3].img" class="img-kiri">
                        </a>
          </div>
        </div>
        <!--  -->
        <div class="row">
          <div class="col-50">
            <a v-bind:href="menu[4].url">
                            <img :src="menu[4].img" class="img-kanan">
                        </a>
          </div>
          <div class="col-50">
            <a v-bind:href="menu[5].url">
                            <img :src="menu[5].img" class="img-kiri">
                        </a>
          </div>
        </div>
        <br>
        <br>

      </f7-page>
    </f7-pages>
  </f7-view>
  <!-- </f7-views> -->
</div>
</template>

<script>
var menu = [
  // {
  // 	tittle: 'HOMEPAGE',
  // 	url: '/#/',
  // 	img: './assets/poldasulsel/gambarsampel/02. PROFILE/HOMEPAGE.png'
  // },
  {
    tittle: 'PROFILE',
    url: '/submenuk-profile',
    img: require('./assets/poldasulsel/gambarsampel/02. PROFILE/PROFILE.png')
    }, {
    tittle: 'INFORMASI',
    url: '/submenuk-informasi',
    img: require('./assets/poldasulsel/gambarsampel/01. HOMEPAGE/INFORMASI.png')
  }, {
    tittle: 'LAYANAN ONLINE',
    url: '/submenuk-layanan',
    img: require('./assets/poldasulsel/gambarsampel/01. HOMEPAGE/LAYANAN ONLINE.png')
  }, {
    tittle: 'PENGADUAN',
    url: '/pengaduan',
    img: require('./assets/poldasulsel/gambarsampel/01. HOMEPAGE/PENGADUAN.png')
  }, {
    tittle: 'BERITA',
    url: '/berita',
    img: require('./assets/poldasulsel/gambarsampel/01. HOMEPAGE/BERITA.png')
  }, {
    tittle: 'GALERY',
    url: '/gallery',
    img: require('./assets/poldasulsel/gambarsampel/01. HOMEPAGE/GALLERY.png')
  }
]
export default {
  name: 'app',
  data() {
    return {
      // index: 0,
      menu: menu
    }
  },
  mounted() {

  },
  updated() {
    // Show full page LoadingOverlay

  },
  methods: {
    hrefKlik(param) {
      // if (param.indexOf('submenuk') !== -1) {
      // 	// this.$router.push(param)
      // 	return
      // }
      // var mystring = param
      // var newchar = '_'
      // mystring = mystring.split('/').join(newchar)
      // param = mystring
      // param = '/iframe/' + param
      // alert(param)
      // this.$router.push(param)
    }
  }
}
</script>
