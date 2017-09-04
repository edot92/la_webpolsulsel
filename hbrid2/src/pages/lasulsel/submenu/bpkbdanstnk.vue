<template>
    <f7-page>
        <f7-navbar title="Infromasi BPKB Dan STNK" back-link="Back" sliding></f7-navbar>
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
          <a @click.prevent="''">
            <img  class="img-kiri ">
          </a>
        </div>
                    </div>
                </div>
                <!--  -->
            </div>
        </f7-block>
        <!-- Picker Modal -->
        <f7-popup tablet-fullscreen :opened="modalViewbpkb">
            <div class="navbar2">
                <div class="navbar2-inner navbar2-on-right" style="margin-left:30%">
                    {{isiHalaman}}
                </div>
                <div class="navbar2-inner navbar2-on-center">
                    <a @click.prevent="gotoback()" class="left2 sliding2" style="transform: translate3d(0px, 0px, 0px);">
                        <i class="icon icon-back"></i>
                        <span class="">Back</span>
                    </a>
                </div>
            </div>
            </div>
            <div class="row">
                <div v-if="isiHalaman=='stnkbaliknama'">
                    <stnkbaliknama></stnkbaliknama>
                </div>
                <div v-else-if="isiHalaman=='stnkbaru'">
                    <stnkbaru>
                    </stnkbaru>
                </div>
                <div v-else-if="isiHalaman=='stnkbbn2'">
                    <stnkbbn2>
                    </stnkbbn2>
                </div>
                <div v-else-if="isiHalaman=='stnkduplikat'">
                    <stnkduplikat>
                    </stnkduplikat>
                </div>
                <div v-else-if="isiHalaman=='stnkexluardaerahmutasimasuk'">
                    <stnkexluardaerahmutasimasuk>
                    </stnkexluardaerahmutasimasuk>
                </div>
            </div>
            </div>
        </f7-popup>
    </f7-page>
</template>
<script>
// var pathFile='../submenu/sub_informasi_bpkbdanstnk1'
import stnkbaliknama from 'src/pages/lasulsel/submenu/sub_informasi_bpkbdanstnk1/stnkbaliknama'
import stnkbaru from 'src/pages/lasulsel/submenu/sub_informasi_bpkbdanstnk1/stnkbaru'
import stnkbbn2 from 'src/pages/lasulsel/submenu/sub_informasi_bpkbdanstnk1/stnkbbn2'
import stnkduplikat from 'src/pages/lasulsel/submenu/sub_informasi_bpkbdanstnk1/stnkduplikat'
import stnkexluardaerahmutasimasuk from 'src/pages/lasulsel/submenu/sub_informasi_bpkbdanstnk1/stnkexluardaerahmutasimasuk'
var pathImg = ''
var menuProfile = [
    {
        tittle: 'STNK BALIK NAMA ',
        url: 'stnkbaliknama',
        img: require('src/assets/poldasulsel/gambarsampel/03. INFORMASI/SUB BPKB & STNK/STNK BALIK NAMA.png')
    },
       {
            tittle: 'STNK BARU ',
            url: 'stnkbaru',
            img: require('src/assets/poldasulsel/gambarsampel/03. INFORMASI/SUB BPKB & STNK/STNK BARU.png')
        },

    {
        tittle: 'STNK DUPLIKAT ',
        url: 'stnkduplikat',
        img: require('src/assets/poldasulsel/gambarsampel/03. INFORMASI/SUB BPKB & STNK/STNK DUPLIKAT.png')
    },
    {
        tittle: 'STNK BBN ii ',
        url: 'stnkbbn2',
        img: require('src/assets/poldasulsel/gambarsampel/03. INFORMASI/SUB BPKB & STNK/STNK BBN ii.png')
    },
      {
        tittle: 'STNK EXLUAR DAERAH ',
        url: 'stnkexluardaerahmutasimasuk',
        img: require('src/assets/poldasulsel/gambarsampel/03. INFORMASI/SUB BPKB & STNK/STNK EXLUAR DAERAH.png')
    },
]

export default {
    components: {
        stnkbaliknama,
        stnkbaru,
        stnkbbn2,
        stnkduplikat,
        stnkexluardaerahmutasimasuk,
    },
    data() {
        return {
            menu: menuProfile,
            htmlRaw: '',
            isiHalaman: '',
            modalViewbpkb: false
        }
    },
    // destroyed() {
    //     this.modalViewbpkb = false
    // },
    // mounted() {
    //     this.modalViewbpkb = false
    // },
    methods: {
        loadPage(targetnya) {
            this.isiHalaman = targetnya
            this.modalViewbpkb = true
            return targetnya
        },
        gotoback() {
            this.modalViewbpkb = false

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
