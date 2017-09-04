<template>
  <f7-page>
    <f7-navbar title="Halaman SIM" back-link="Back" sliding></f7-navbar>
    <f7-block inner>
      <div class="row">
        <h3 style="text-align: center">

        </h3>
        <div class="row">

  <div class="row row-custom">
    <div class="col-50">
  <a @click.prevent="loadPage(menu[0].url)">
        <img :src="menu[0].img" class="img-kanan">
      </a>
    </div>
    <div class="col-50">
      <a @click.prevent="loadPage(menu[1].url)">
        <img :src="menu[1].img" class="img-kiri">
      </a>
    </div>
  </div>
  <!--  -->
  <div class="row">
    <div class="col-50">
      <a @click.prevent="loadPage(menu[2].url)">
        <img :src="menu[2].img" class="img-kanan">
      </a>
    </div>
    <div class="col-50">
      <a @click.prevent="loadPage(menu[3].url)">
        <img :src="menu[3].img" class="img-kiri">
      </a>
    </div>
  </div>
  <!--  -->
  <div class="row">
    <div class="col-50">
      <a @click.prevent="loadPage(menu[4].url)">
        <img :src="menu[4].img" class="img-kanan">
      </a>
    </div>
    <div class="col-50 ">
      <!-- <a @click.prevent="loadPage(menu[5].url) ">
        <img :src="menu[5].img " class="img-kiri ">
      </a> -->
    </div>
  </div>

        </div>
        <!--  -->
      </div>
    </f7-block>
    <!-- Picker Modal -->
    <f7-popup tablet-fullscreen :opened="modalView">
      <div class="navbar2">
        <div class="navbar2-inner navbar2-on-right" style="margin-left:30%">
          {{isiHalaman}}
        </div>
        <div class="navbar2-inner navbar2-on-center">
          <a @click.prevent="gotoback()" class="left2 sliding2" style="transform: translate3d(0px, 0px, 0px);"><i class="icon icon-back"></i><span class="">Back</span></a>          </div>
      </div>
      </div>
      <div class="row">
        <div v-if="isiHalaman=='jenisgolongansim'">
          <jenisgolongansim></jenisgolongansim>
        </div>
        <div v-else-if="isiHalaman=='simbaru'">
          <simbaru>
          </simbaru>
        </div>
        <div v-else-if="isiHalaman=='siminternational'">
          <siminternational>
          </siminternational>
        </div>
        <div v-else-if="isiHalaman=='simperpanjangan'">
          <simperpanjangan>
          </simperpanjangan>
        </div>
        <div v-else-if="isiHalaman=='simrusakhilang'">
          <simrusakhilang>
          </simrusakhilang>
        </div>
      </div>
    </f7-popup>
  </f7-page>

</template>
<script>
  import jenisgolongansim from './../submenu/sub_informasi_sim/jenisgolongansim'
  import simbaru from './../submenu/sub_informasi_sim/simbaru'
  import siminternational from './../submenu/sub_informasi_sim/siminternational'
  import simperpanjangan from './../submenu/sub_informasi_sim/simperpanjangan'
  import simrusakhilang from './../submenu/sub_informasi_sim/simrusakhilang'
  var pathImg='src/assets/poldasulsel/gambarsampel/03_INFORMASI/SUB SIM/'
  var menuProfile = [
   {
      tittle: 'jenisgolongansim',
      url: 'jenisgolongansim',
      img: require('src/assets/poldasulsel/gambarsampel/03. INFORMASI/SUB SIM/JENIS GOLONGAN SIM.png')
    },
    {
      tittle: 'simbaru',
      url: 'simbaru',
            img: require('src/assets/poldasulsel/gambarsampel/03. INFORMASI/SUB SIM/SIM BARU.png')
    },
    {
      tittle: 'siminternational',
      url: 'siminternational',
          img: require('src/assets/poldasulsel/gambarsampel/03. INFORMASI/SUB SIM/SIM INTERNATIONAL.png')
    },
    {
      tittle: 'simperpanjangan',
      url: 'simperpanjangan',
          img: require('src/assets/poldasulsel/gambarsampel/03. INFORMASI/SUB SIM/SIM PERPANJANGAN.png')
    },
    {
      tittle: 'simrusakhilang',
      url: 'simrusakhilang',
          img: require('src/assets/poldasulsel/gambarsampel/03. INFORMASI/SUB SIM/SIM RUSAK HILANG.png')
    },
  ]
  export default {
    // name: 'sim',
    components: {
      jenisgolongansim,
      simbaru,
      siminternational,
      simperpanjangan,
      simrusakhilang,
    },
    data() {
      return {
        menu: menuProfile,
        htmlRaw: '',
        isiHalaman: '',
        modalView: false
      }
    },
    destroyed() {
      this.modalView = false
    },
    mounted() {
      this.modalView = false
    },
    methods: {
      // getUrlImageMap(param) {
      //   var url = menu[param].url
      //   return { 'background-image': 'url("' + url + '")' }
      // },
      loadPage(targetnya) {
        this.isiHalaman = targetnya
        this.modalView = true
        return targetnya
      },
      gotoback() {
        // alert('tes')
        this.modalView = false

        // this.$router.back()
      },

    }
  }

</script>
<style scoped>
  .navbar2,
  .subnavbar,
  .toolbar {
    background: #f7f7f8;
  }

  .navbar2,
  .toolbar {
    height: 44px;
    width: 100%;
    box-sizing: border-box;
    font-size: 17px;
    position: relative;
    margin: 0;
    z-index: 500;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  .navbar2-inner,
  .toolbar-inner {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    padding: 0 8px;
    box-sizing: border-box;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    border-style: groove;
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
