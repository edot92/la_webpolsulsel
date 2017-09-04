<template>
<div id="page">

  <f7-page>
    <f7-navbar title="LAYANAN ONLINE" back-link="Back" sliding></f7-navbar>
    <f7-block inner>


      <!-- <div class="row">
        <div v-html="tempRes"></div>
    </div> -->


      <div class="content-block-title" style="
     text-align: center;:center
">Cek Pajak Kendaraan</div>
      <div class="list-block">
        <ul>
          <!-- Text inputs -->

          <li>

            <div class="item-title" style=" text-align: center;:center">

              No . Polisi
            </div>

            <div class="item-content">


              <div class="item-inner">

                <div class="item-input">
                  <input style="text-align: center;" type="text" placeholder="xx" v-model="form.nopol1" required minlength="1" maxlength="3">
                </div>
                -
                <div class="item-input">
                  <input type="text" style="text-align: center;" placeholder="1234" v-model="form.nopol2" required minlength="1" maxlength="5">
                </div>
                -
                <div class="item-input">
                  <input type="text" style="text-align: center;" placeholder="yyyy" v-model="form.nopol3" required maxlength="3">
                </div>

              </div>
            </div>
          </li>
          <li>

            <li>
              <!-- Select -->
              <li>

                <div class="item-title" style="    text-align: center;">
                  wilayah
                </div>

                <div class="item-content">
                  <!-- <div class="item-media">
                <i class="icon f7-icons">persons</i>
            </div> -->
                  <div class="item-inner">
                    <div class="item-input">

                      <select v-model="form.wilayah">
        <option value="BANTAENG">BANTAENG</option>
        <option value="BARRU">BARRU</option>
        <option value="BELOPA">BELOPA</option>
        <option value="BONE">BONE</option>
        <option value="BULUKUMBA">BULUKUMBA</option>
        <option value="ENREKANG">ENREKANG</option>
        <option value="GOWA">GOWA</option>
        <option value="JENEPONTO">JENEPONTO</option>
        <option value="MAKASSAR" selected="selected">MAKASSAR</option>
        <option value="MALILI">MALILI</option>
        <option value="MAROS">MAROS</option>
        <option value="MASAMBA">MASAMBA</option>
        <option value="PALOPO">PALOPO</option>
        <option value="PANGKEP">PANGKEP</option>
        <option value="PARE-PARE">PARE-PARE</option>
        <option value="PINRANG">PINRANG</option>
        <option value="SELAYAR">SELAYAR</option>
        <option value="SIDRAP">SIDRAP</option>
        <option value="SINJAI">SINJAI</option>
        <option value="SOPPENG">SOPPENG</option>
        <option value="TAKALAR">TAKALAR</option>
        <option value="TATOR">TATOR</option>
        <option value="TORUT">TORUT</option>
        <option value="WAJO">WAJO</option>
    </select>

                    </div>
                  </div>
                </div>
              </li>
              <div v-if="showBtn">
                <p @click.prevent="postSubmit()">
                  <a href="#" class="button button-round">Cek Data</a>
                </p>
              </div>
              <div v-else>
                <div class="alert alert-info">
    <strong>Info!</strong> Sedang mengecek data
    </div>
              </div>
              <br>

        </ul>
      </div>


    </f7-block>


  </f7-page>
</div>
</template>
<script>
const urlSubmit = 'http://ditlantas.sulsel.polri.go.id/online/index.php/home_page/cekdatapajak'
export default {
  //   name:'cekpajakonline',
  data() {
    return {
      tempRes: '',
      form: {
        wilayah: '',
        nopol1: '',
        nopol2: '',
        nopol3: '',
      },
      showBtn: true

    }
  },
  mounted() {
    //   this.postPage(httpGetPage)
    // this.getData()

  },
  methods: {
    //   getData(){
    //       var thisVue = this
    //       this.axios(urlSubmit).then(res => {
    //           console.log(res)
    //       }).catch(err => {
    //           console.log(err)
    //       })
    //   },
    postSubmit() {
      this.showBtn = false
      var thisVue = this
      var params = new URLSearchParams()
      params.append('wilayah', this.form.wilayah)
      params.append('nopol1', this.form.nopol1)
      params.append('nopol2', this.form.nopol2)
      params.append('nopol3', this.form.nopol3)
      this.axios.post(urlSubmit, params).then(response => {
        console.log(response.data)
        thisVue.showBtn = true
        const res = response.data
        if (res["ERROR"] === false) {
          swal({
            title: "info",
            text: res["STATUS"],
            type: "success"
          });
        } else {
          swal({
            title: "Problem",
            text: res["STATUS"],
            type: "error"
          });
        }
      }).catch(err => {
        thisVue.showBtn = true
        swal({
          title: "Problem",
          text: 'nerror network',
          type: "error"
        });
      })
    }
  }
}
</script>
