<template>
    <f7-page>
        <f7-navbar title="Layanan Online" back-link="Back" sliding></f7-navbar>
        <f7-block inner>
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

        </f7-block>
        <!-- Picker Modal -->
        <f7-popup tablet-fullscreen :opened="modalView">
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
                <!-- <div v-if="isiHalaman=='permohonanblokir'">
                    <permohonanblokir></permohonanblokir>
                </div> -->
                <!-- <div v-else-if="isiHalaman=='escort'">
                    <escort></escort>
                </div> -->
                <!-- <div v-else-if="isiHalaman=='cekpajakonline'">
                        <cekpajakonline></cekpajakonline>
                    </div> -->
                <!-- <div v-else-if="isiHalaman=='permohonannrkb'">
                    <permohonannrkb></permohonannrkb>
                </div> -->
            </div>
            </div>
            </div>
        </f7-popup>
    </f7-page>
</template>

<script>
    // const urlImg = '@assets/poldasulsel/gambarsampel/04. LAYANAN ONLINE/'
    import permohonanblokir from './submenulayanan/permohonanblokir'
    import escort from './submenulayanan/escort.vue'
    import permohonannrkb from './submenulayanan/permohonannrkb'
    // import cekpajakonline  from '../submenu/submenulayanan/cekpajakonline'
    var menuProfile = [{
            url: '/layanan-cekpajakonline',
            img: require('src/pages/lasulsel/images/poldasulsel/gambarsampel/04. LAYANAN ONLINE/1. CEK PAJAK ONLINE.png')
        },
        {
            url: '/layanan-permohonannrkb',
            img: require('src/pages/lasulsel/images/poldasulsel/gambarsampel/04. LAYANAN ONLINE/2. PERMOHONAN NRKB.png')
        },
        {
            url: '/layanan-escort',
          img:require('src/pages/lasulsel/images/poldasulsel/gambarsampel/04. LAYANAN ONLINE/3. ESCORT.png')
        }, {
            url: '/layanan-permohonanblokir',
            img: require('src/pages/lasulsel/images/poldasulsel/gambarsampel/04. LAYANAN ONLINE/4. PERMOHONAN BLOKIR.png')
        }
    ]
    export default {
        name: 'layanan',
        components: {
            permohonanblokir,
            escort,
            permohonannrkb,
            // cekpajakonline
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
            loadPage(targetnya) {
                this.isiHalaman = targetnya
                this.modalView = true
                return targetnya
            },
            gotoback() {
                this.modalView = false
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
