<template>
  <f7-page>
    <f7-navbar title="Menu Informasi" back-link="Back" sliding></f7-navbar>
    <f7-block inner>
      <div class="row">
        <div class="row">
          <div class="row row-custom">
            <div class="col-50">
              <a v-bind:href="menu[0].url">
								<img :src="menu[0].img" class="img-kanan">
							</a>
            </div>
            <div class="col-50">
              <a v-bind:href="menu[1].url">
                        <img  :src="menu[1].img" class="img-kiri">
										</a>
            </div>
          </div>
          <!--  -->
          <div class="row ">
            <div class="col-50">
              <a @click.prevent="loadPage(menu[2].url)">
                        <img  :src="menu[2].img" class="img-kanan">
										</a>
            </div>
            <div class="col-50">
              <a @click.prevent="loadPage(menu[3].url)">
                        <img  :src="menu[3].img" class="img-kiri">
										</a>
            </div>
          </div>
          <!--  -->
          <div class="row">
            <div class="col-50">
              <a @click.prevent="loadPage(menu[4].url)">
                        <img  :src="menu[4].img"  class="img-kanan">
										</a>
            </div>
            <div class="col-50">
              <a @click.prevent="loadPage(menu[5].url)">
                        <img :src="menu[5].img" class="img-kiri">
										</a>
            </div>
          </div>
          <!-- <div class="col-50">
            <a href="loadPage(menu[5].url)">
                        <img style="height: 120px; width: 100%; object-fit: contain" :src="menu[5].img">
            </a>
          </div> -->
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
        <div v-if="isiHalaman=='submenu-simbaru'">
          <simbaru></simbaru>
        </div>
        <div v-else-if="isiHalaman=='Profil Kami'">
          <profileisi></profileisi>
        </div>
        <div v-else-if="isiHalaman=='misi'">
          <misi></misi>
        </div>
        <div v-else-if="isiHalaman=='struktur-organisasi'">
          <struktur-organisasi></struktur-organisasi>
        </div>
        <div v-else-if="isiHalaman=='catur-prasetya'">
          <catur-prasetya></catur-prasetya>
        </div>
        <div v-else-if="isiHalaman=='tribrata'">
          <tribrata></tribrata>
        </div>
      </div>
    </f7-popup>
  </f7-page>
</template>

<script>
  // import submenuSimbaru from '../submenu/sub_informasi_sim/sim-baru.vue'
  import visi from '../isihalaman/profile/visi'
  import misi from '../isihalaman/profile/misi'
  import strukturOrganisasi from '../isihalaman/profile/strukturOrganisasi'
  import caturPrasetya from '../isihalaman/profile/caturPrasetya'
  import tribrata from '../isihalaman/profile/tribrata'
  var menuProfile = [
    {
      tittle: ' SIM',
      url: '/submenuk-sim',
      img: require('assets/poldasulsel/gambarsampel/03. INFORMASI/SIM.png')
    },
    {
      tittle: 'Informasi BPKB & STNK',
      // url: '/2570-visi.html',
      url: '/submenuk-bpkbdanstnk',
      img: require('assets/poldasulsel/gambarsampel/03. INFORMASI/BPKB & STNK.png')
    },
    {
      tittle: 'Informasi JUMLAH LAKA LANTAS',
      url: 'JUMLAH_LAKA_LANTAS',
      img: require('assets/poldasulsel/gambarsampel/03. INFORMASI/JUMLAH LAKA LANTAS.png')
    },
    {
      tittle: 'Informasi TINDAK PIDANA',
      url: 'TINDAK_PIDANA',
      img: require('assets/poldasulsel/gambarsampel/03. INFORMASI/TINDAK PIDANA.png')
    },
    {
      tittle: 'Informasi Peraturan Perundang undangan',
      url: 'Peraturan',
      img: require('assets/poldasulsel/gambarsampel/03. INFORMASI/PERATURAN POERUNDANGAN.png')
    },
    {
      tittle: 'Informasi PNBP',
      url: 'PNBP',
      img: require('assets/poldasulsel/gambarsampel/03. INFORMASI/PNBP.png')
    },

    {

      tittle: 'CATUR PRASETYA',
      // url: '/2577-catur-prasetya.html',
      url: 'catur-prasetya',
      img: require('assets/poldasulsel/gambarsampel/02. PROFILE/CATUR PRASETYA.png')

    }
  ]

  export default {
    name: 'informasi',
    components: {
      // submenuSimbaru,
      // visi,
      // misi,
      // strukturOrganisasi,
      // caturPrasetya,
      // tribrata
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
