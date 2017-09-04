<template>
    <f7-page>
        <f7-navbar title="LAYANAN ONLINE" back-link="Back" sliding></f7-navbar>
        <f7-block inner>

            <!-- <div class="content-block-title" style="text-align: center;">
                Form Permohonan
                <br>Pengawalan (ESCORT)
            </div>
     -->
            <!-- <iframe width="100%" style="height: 100em;" src="http://ditlantas.sulsel.polri.go.id/online/index.php/home_page/escort" frameborder="0"></iframe> -->

            <!-- start form -->


    <h3 style="text-align: center;">Permohonan Pengawalan (ESCORT)</h3>

            <div class="row">

                <div class="row">
                    <div class="col-md-10 col-md-offset-1">

                        <form role="form" id="escortForm" enctype="multipart/form-data">

                            <div class="default" id="form_data">
                                <!-- <div class="heading">
                                    <h1 class="title">FORM PERMOHONAN</h1>
                                </div> -->
                                <div class="body">
                                    <div class="row">
                                        <!-- begin of row -->
                                        <div class="col-md-6">
                                            <!-- begin of col-md6 -->
                                            <div class="form-group">
                                                <label for="nama">NAMA PEMOHON</label>
                                                <input type="text" name="nama" id="nama" class="form-control input-lg " required="">

                                            </div>
                                        </div>
                                        <!-- end of col-md6 -->

                                        <div class="col-md-6">
                                            <!-- begin of col-md6 -->

                                            <div class="form-group">
                                                <label for="alamat">ALAMAT PEMOHON</label>
                                                <input type="text" name="alamat" id="alamat" class="form-control input-lg " required="">
                                            </div>
                                        </div>
                                        <!-- end of col-md6 -->

                                    </div>
                                    <!-- end of row -->

                                    <div class="row">
                                        <!-- begin of row -->

                                        <div class="col-md-6">
                                            <!-- begin of col-md6 -->

                                            <div class="form-group">
                                                <label for="tempat_kelahiran">PROVINSI PEMOHON</label>
                                                <select name="provinsi" id="provinsi" class="form-control input-lg select2" required="">
                                                <option value="11">ACEH</option>
                                                <option value="51">BALI</option>
                                                <option value="36">BANTEN</option>
                                                <option value="17">BENGKULU</option>
                                                <option value="34">DAERAH ISTIMEWA YOGYAKARTA</option>
                                                <option value="31">DKI JAKARTA</option>
                                                <option value="75">GORONTALO</option>
                                                <option value="15">JAMBI</option>
                                                <option value="32">JAWA BARAT</option>
                                                <option value="33">JAWA TENGAH</option>
                                                <option value="35">JAWA TIMUR</option>
                                                <option value="61">KALIMANTAN BARAT</option>
                                                <option value="63">KALIMANTAN SELATAN</option>
                                                <option value="62">KALIMANTAN TENGAH</option>
                                                <option value="64">KALIMANTAN TIMUR</option>
                                                <option value="65">KALIMANTAN UTARA</option>
                                                <option value="19">KEPULAUAN BANGKA BELITUNG</option>
                                                <option value="21">KEPULAUAN RIAU</option>
                                                <option value="18">LAMPUNG</option>
                                                <option value="81">MALUKU</option>
                                                <option value="82">MALUKU UTARA</option>
                                                <option value="52">NUSA TENGGARA BARAT</option>
                                                <option value="53">NUSA TENGGARA TIMUR</option>
                                                <option value="91">PAPUA</option>
                                                <option value="92">PAPUA BARAT</option>
                                                <option value="14">RIAU</option>
                                                <option value="76">SULAWESI BARAT</option>
                                                <option value="73">SULAWESI SELATAN</option>
                                                <option value="72">SULAWESI TENGAH</option>
                                                <option value="74">SULAWESI TENGGARA</option>
                                                <option value="71">SULAWESI UTARA</option>
                                                <option value="13">SUMATERA BARAT</option>
                                                <option value="16">SUMATERA SELATAN</option>
                                                <option value="12">SUMATERA UTARA</option>
                                            </select>

                                            </div>
                                        </div>
                                        <!-- end of col-md6 -->

                                        <div class="col-md-6">
                                            <!-- begin of col-md6 -->

                                            <div class="form-group">
                                                <label for="tempat_dilahirkan">KABUPATEN PEMOHON</label>
                                                <select name="kabupaten" id="kabupaten" class="form-control input-lg select2" required="">
                                            </select>

                                            </div>
                                        </div>
                                        <!-- end of col-md6 -->

                                    </div>
                                    <!-- end of row -->

                                    <div class="row">
                                        <!-- begin of row -->

                                        <div class="col-md-6">
                                            <!-- begin of col-md6 -->

                                            <div class="form-group">
                                                <label for="tgl_lahir">KECAMATAN PEMOHON</label>
                                                <select name="kecamatan" id="kecamatan" class="form-control input-lg select2" required="">
                                            </select>

                                            </div>
                                        </div>
                                        <!-- end of col-md6 -->

                                        <div class="col-md-6">
                                            <!-- begin of col-md6 -->

                                            <div class="form-group">
                                                <label for="jam_lahir">DESA/KELURAHAN PEMOHON</label>
                                                <select name="desa" id="desa" class="form-control input-lg select2" required="">
                                            </select>

                                            </div>
                                        </div>
                                        <!-- end of col-md6 -->

                                    </div>
                                    <!-- end of row -->

                                    <div class="row">
                                        <!-- begin of row -->

                                        <div class="col-md-6">
                                            <!-- begin of col-md6 -->

                                            <div class="form-group">
                                                <label for="no_telp">NO. TELP PEMOHON</label>
                                                <input type="text" name="no_telp" id="no_telp" class="form-control input-lg " required="">

                                            </div>
                                        </div>
                                        <!-- end of col-md6 -->

                                        <div class="col-md-6">
                                            <!-- begin of col-md6 -->

                                            <div class="form-group">
                                                <label for="penolong_kelahiran">EMAIL PEMOHON </label>
                                                <input type="text" name="email" id="email" class="form-control input-lg " required="">

                                            </div>
                                        </div>
                                        <!-- end of col-md6 -->

                                    </div>
                                    <!-- end of row -->

                                    <div class="row">
                                        <!-- begin of row -->

                                        <div class="col-md-6">
                                            <!-- begin of col-md6 -->

                                            <div class="form-group">
                                                <label for="berat_bayi">LOKASI PENGAWALAN</label>
                                                <input type="text" name="lokasi" id="lokasi" class="form-control input-lg " required="">

                                            </div>
                                        </div>
                                        <!-- end of col-md6 -->

                                        <div class="col-md-6">
                                            <!-- begin of col-md6 -->

                                            <div class="form-group">
                                                <label for="panjang_bayi">TANGGAL PENGAWALAN</label>
                                                <input type="text" name="tanggal" id="tanggal" class="tanggal form-control input-lg" data-date-format="dd-mm-yyyy" required="">

                                            </div>
                                        </div>
                                        <!-- end of col-md6 -->

                                    </div>

                                    <div class="row">
                                        <!-- begin of row -->

                                        <div class="col-md-6">
                                            <!-- begin of col-md6 -->

                                            <div class="form-group">
                                                <label for="jam">JAM PENGAWALAN</label>
                                                <input type="text" name="jam" id="jam" class="jam form-control input-lg " required="">

                                            </div>
                                        </div>
                                        <!-- end of col-md6 -->

                                        <div class="col-md-6">
                                            <!-- begin of col-md6 -->

                                            <div class="form-group">
                                                <label for="provinsi">&nbsp;</label> &nbsp;
                                            </div>
                                        </div>
                                        <!-- end of col-md6 -->

                                    </div>

                                    <div class="row">

                                        <div class="col-md-12">

                                            <button id="simpanOk" class="btn btn-primary btn-block  btn-lg" type="submit">
                                            <i class="fa fa-floppy-o"></i> SIMPAN PERMOHONAN
                                        </button>

                                            <button id="simpanDisable" class="btn btn-primary btn-block  btn-lg " disabled="disabled" type="submit" style="display: none;">
                                            <i class="fa fa-refresh fa-spin"></i> LOADING...
                                        </button>

                                        </div>
                                    </div>

                                </div>
                                <!-- end of panel body -->
                            </div>
                            <!-- end of panel -->







                            <!--   </div>
        			</div> -->

                        </form>
                    </div>
                </div>








            </div>

            <!-- end form -->
        </f7-block>
    </f7-page>
</template>

<script>
    const urlSubmit = 'http://ditlantas.sulsel.polri.go.id/online/index.php/home_page/cekdatapajak'
   function eksternalInitPage(){
//    $(document).ready(function() {
           $("#escortForm").submit(function() {
               // $("#errorblock").hide();
               $("#simpanOk").hide();
               $("#simpanDisable").show();

               $.ajax({
                   url: 'http://ditlantas.sulsel.polri.go.id/online/index.php/home_page/escort_simpan',
                   data: new FormData($('#escortForm')[0]),
                   contentType: false,
                   processData: false,
                   type: 'post',
                   dataType: 'json',
                   success: function(obj) {

                       console.log(obj.error);

                       if (obj.error == false) { // berhasil

                           // alert('hooooo.. error false');
                           BootstrapDialog.alert({
                               type: BootstrapDialog.TYPE_PRIMARY,
                               title: 'Informasi',
                               message: obj.message

                           });
                           $("#simpanDisable").hide();

                           $("#form_data").hide();
                           $("#successblock").show();
                           $("#successMessage").html(obj.message);

                       }
                       else {
                           BootstrapDialog.alert({
                               type: BootstrapDialog.TYPE_DANGER,
                               title: 'Error',
                               message: obj.message

                           });

                           $("#simpanDisable").hide();
                           $("#simpanOk").show();
                       }
                   }


               });
               return false;
           });


           $("#provinsi").change(function() {

               $.ajax({

                   url: 'http://ditlantas.sulsel.polri.go.id/online/index.php/home_page/get_kabupaten',
                   data: { provinsi: $(this).val() },
                   type: 'post',
                   success: function(result) {
                       $("#kabupaten").html(result)
                   }
               });

           });

           $("#kabupaten").change(function() {

               $.ajax({

                   url: 'http://ditlantas.sulsel.polri.go.id/online/index.php/home_page/get_kecamatan',
                   data: { kabupaten: $(this).val() },
                   type: 'post',
                   success: function(result) {
                       $("#kecamatan").html(result)
                   }
               });

           });

           $("#kecamatan").change(function() {

               $.ajax({

                   url: 'http://ditlantas.sulsel.polri.go.id/online/index.php/home_page/get_desa',
                   data: { kecamatan: $(this).val() },
                   type: 'post',
                   success: function(result) {
                       $("#desa").html(result)
                   }
               });

           });

    //    });
   }
   import VueClockPicker from 'vue-clock-picker'
   export default {
       components: {
           VueClockPicker
       },
        data() {
            return {
                tempRes: '',
                form: {
                    wilayah: '',
                    nopol1: '',
                    nopol2: '',
                    nopol3: '',
                }
            }
        },
        mounted() {
            //   this.postPage(httpGetPage)
            this.initPage()
                 $('.tanggal').datepicker().on('changeDate', function(ev) {
                $('.tanggal').datepicker('hide');
            });

            $('.jam').clockpicker();
        },
        created () {
            //  this.initPage()
        },
        methods: {
            initPage(){
               eksternalInitPage()
            },//end init page
            postSubmit() {
                var thisVue = this
                var params = new URLSearchParams()
                params.append('wilayah', this.form.wilayah)
                params.append('nopol1', this.form.nopol1)
                params.append('nopol2', this.form.nopol2)
                params.append('nopol3', this.form.nopol3)
                this.axios.post(urlSubmit, params).then(response => {
                    console.log(response.data)
                    const res = response.data
                    if (res["ERROR"] === false) {
                        alert(res["STATUS"], 'success')
                    } else {
                        alert(res["STATUS"], 'warning')
                    }
                }).catch(err => {
                    console.log(err)
                })
            },
        }
    }
</script>
<style scoped>
.form-group {
    margin-bottom: 15px;
}

div {
    display: block;
}

.col-lg-1,
.col-lg-10,
.col-lg-11,
.col-lg-12,
.col-lg-2,
.col-lg-3,
.col-lg-4,
.col-lg-5,
.col-lg-6,
.col-lg-7,
.col-lg-8,
.col-lg-9,
.col-md-1,
.col-md-10,
.col-md-11,
.col-md-12,
.col-md-2,
.col-md-3,
.col-md-4,
.col-md-5,
.col-md-6,
.col-md-7,
.col-md-8,
.col-md-9,
.col-sm-1,
.col-sm-10,
.col-sm-11,
.col-sm-12,
.col-sm-2,
.col-sm-3,
.col-sm-4,
.col-sm-5,
.col-sm-6,
.col-sm-7,
.col-sm-8,
.col-sm-9,
.col-xs-1,
.col-xs-10,
.col-xs-11,
.col-xs-12,
.col-xs-2,
.col-xs-3,
.col-xs-4,
.col-xs-5,
.col-xs-6,
.col-xs-7,
.col-xs-8,
.col-xs-9 {
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
}

/* label {
    display: inline-block;
    max-width: 100%;
    margin-bottom: 5px;
    font-weight: 700;
} */

.input-lg {
    margin-bottom: 10px;
}
/*
 .input-lg {
    height: 46px;
    padding: 10px 16px;
    font-size: 18px;
    line-height: 1.3333333;
    border-radius: 6px;
} */

 .form-control {
    display: block;
    width: 100%;
    height: 34px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
    -webkit-transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;
    -o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
}

 button,
input,
select,
textarea {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
}

 input {
    line-height: normal;
}

 button,
input,
optgroup,
select,
textarea {
    margin: 0;
    font: inherit;
    color: inherit;
}



.h3,
h3 {
    font-size: 24px;
}

 .h1,
.h2,
.h3,
h1,
h2,
h3 {
    margin-top: 20px;
    margin-bottom: 10px;
}

 .h1,
.h2,
.h3,
.h4,
.h5,
.h6,
h1,
h2,
h3,
h4,
h5,
h6 {
    font-family: inherit;
    font-weight: 500;
    line-height: 1.1;
    color: inherit;
}


.btn-primary:hover {
    color: #fff;
    background-color: #286090;
    border-color: #204d74;
}

 .btn.focus,
.btn:focus,
.btn:hover {
    color: #333;
    text-decoration: none;
}

 .btn-block {
    display: block;
    width: 100%;
}

 .btn-group-lg>.btn,
.btn-lg {
    padding: 10px 16px;
    font-size: 18px;
    line-height: 1.3333333;
    border-radius: 6px;
}

 .btn-primary {
    color: #fff;
    background-color: #337ab7;
    border-color: #2e6da4;
}

 .btn {
    display: inline-block;
    padding: 6px 12px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 4px;
}

 button,
input,
select,
textarea {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
}

 button,
html input[type=button],
input[type=reset],
input[type=submit] {
    -webkit-appearance: button;
    cursor: pointer;
}

 button,
select {
    text-transform: none;
}

 button {
    overflow: visible;
}

 button,
input,
optgroup,
select,
textarea {
    margin: 0;
    font: inherit;
    color: inherit;
}

.popover.bottom {
    margin-top: 10px;
}

.clockpicker-popover .popover-title {
    background-color: #fff;
    color: #999;
    font-size: 24px;
    font-weight: 700;
    line-height: 30px;
    text-align: center;
}

.popover-title {
    padding: 8px 14px;
    margin: 0;
    font-size: 14px;
    background-color: #f7f7f7;
    border-bottom: 1px solid #ebebeb;
    border-radius: 5px 5px 0 0;
}

.dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1000;
    /* display: none; */
    float: left;
    min-width: 160px;
    padding: 5px 0;
    margin: 2px 0 0;
    font-size: 14px;
    text-align: left;
    list-style: none;
    background-color: #fff;
    -webkit-background-clip: padding-box;
    background-clip: padding-box;
    border: 1px solid #ccc;
    border: 1px solid rgba(0, 0, 0, .15);
    border-radius: 4px;
    -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, .175);
    box-shadow: 0 6px 12px rgba(0, 0, 0, .175);
}

 .popover {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1060;
    /* display: none; */
    max-width: 276px;
    padding: 1px;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: left;
    text-align: start;
    text-decoration: none;
    text-shadow: none;
    text-transform: none;
    letter-spacing: normal;
    word-break: normal;
    word-spacing: normal;
    word-wrap: normal;
    white-space: normal;
    background-color: #fff;
    -webkit-background-clip: padding-box;
    background-clip: padding-box;
    border: 1px solid #ccc;
    border: 1px solid rgba(0, 0, 0, .2);
    border-radius: 6px;
    -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, .2);
    box-shadow: 0 5px 10px rgba(0, 0, 0, .2);
    line-break: auto;
}




</style>
