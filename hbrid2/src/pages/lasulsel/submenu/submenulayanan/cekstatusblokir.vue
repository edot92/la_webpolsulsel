<template>

    <f7-page>
        <f7-navbar title="LAYANAN ONLINE" back-link="Back" sliding></f7-navbar>
        <f7-block inner>

    <div class="starter-template">
        <h3 style="text-align: center;">Permohonan NKB</h3>
        <!-- <p class="lead">Kini pelayanan kependudukan menjadi lebih mudah dan cepat. Daftar , Isi Formulir, Ambil dokumen ke kantor DUKCAPIL.</p> -->

        <div class="row" style="margin-bottom: 50px;">
        </div>


        <form class="form-horizontal" id="frmsearch">

            <div class="panel panel-default">
                <div class="panel-heading">
                    <h1 class="panel-title">Form Pencarian</h1>
                </div>
                <div class="panel-body">

                    <div class="row">

                        <div class="col-md-3">
                            <label>No. Registrasi</label>
                        </div>

                        <div class="col-md-9">
                            <div class="row">

                                <div class="col-md-4">

                                    <div class="input-group">
                                        <input id="no_register" name="no_register" type="text" maxlength="5" placeholder="No Register" class="form-control input-lg" value="">

                                    </div>

                                </div>

                                <div class="col-md-4">
                                    <button id="oke" class="btn btn-primary btn-block  btn-lg" type="submit">
                                        <i class="fa fa-search"></i> CEK DATA
                                    </button>

                                    <button id="loading" class="btn btn-primary btn-block  btn-lg " disabled="disabled" type="submit" style="display: none;">
                                        <i class="fa fa-refresh fa-spin"></i> LOADING...
                                    </button>
                                </div>

                            </div>
                        </div>

                    </div>
                    <hr>
                    <div class="row">

                        <div class="col-md-3">
                            <label> </label>
                        </div>

                    </div>
                    <!-- end of panel body  -->
                </div>
            </div>
        </form>

        <div class="alert alert-danger" role="alert" id="errorblock" style="display: none;">

            <center>
                <span id="HASIL"></span>
            </center>

        </div>

        <div class="panel panel-default " id="hasil" style="display: none;">
            <div class="panel-heading">
                <h1 class="panel-title">HASIL PENCARIAN</h1>
            </div>
            <div class="panel-body">

                <div class="row">
                    <div class="col-md-6">
                        <!-- colom pertama -->

                        <div class="row">
                            <div class="col-md-4">
                                <label> Nama </label>
                            </div>
                            <div class="col-md-8">
                                <span id="nama"> </span>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-4">
                                <label> Alamat </label>
                            </div>
                            <div class="col-md-8">
                                <span id="alamat"> </span>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-4">
                                <label> No. Telp </label>
                            </div>
                            <div class="col-md-8">
                                <span id="no_telp"> </span>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-4">
                                <label> Email </label>
                            </div>
                            <div class="col-md-8">
                                <span id="email"> </span>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-4">
                                <label> Permintaan NKB </label>
                            </div>
                            <div class="col-md-8">
                                <span id="lokasi"> </span>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-4">
                                <label> Tanggal </label>
                            </div>
                            <div class="col-md-8">
                                <span id="tanggal"> </span>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-4">
                                <label> Status</label>
                            </div>
                            <div class="col-md-8">
                                <span id="status"> </span>
                            </div>
                        </div>

                    </div>
                    <!--  end colom pertama -->

                    <div class="col-md-6">
                        <!-- colom kedua  -->

                    </div>
                    <!--  end colom kedua  -->

                </div>

            </div>
        </div>



    </div>

    </f7-block>
    </f7-page>
</template>

<script>
    export default{

    }
    function initPage(){
           $(document).ready(function() {
            $("#frmsearch").submit(function() {
                $("#oke").hide();
                $("#loading").show();
                //alert('test');
                $.ajax({
                    url: 'http://ditlantas.sulsel.polri.go.id/online/index.php/lihat_nkb/cek_data',
                    data: $(this).serialize(),
                    type: 'post',
                    dataType: 'json',
                    success: function(jsonData) {
                        $("#oke").show();
                        $("#loading").hide();
                        // errorblock
                        // hasil
                        console.log(jsonData);
                        if (jsonData.error == false) {
                            $("#hasil").show();
                            $("#errorblock").hide();
                            $("#nama").html(jsonData.nama);
                            $("#alamat").html(jsonData.alamat);
                            $("#no_telp").html(jsonData.no_hp);
                            $("#email").html(jsonData.email);
                            $("#lokasi").html(jsonData.nopol);
                            $("#tanggal").html(jsonData.tanggal);
                            $("#jam").html(jsonData.jam);
                            $("#no_register").html(jsonData.no_register);
                            if (jsonData.status == 1) {
                                $("#status").html("<div class='panel-danger'>Belum Diproses</div>");
                            } else {
                                $("#status").html("<div class='panel-primary'>Sudah Diproses</div>");
                            }
                        } else {
                            $("#hasil").hide();
                            $("#errorblock").show();
                            $("#HASIL").html(jsonData.message);
                        }
                    }
                });
                return false;
            });
        });
    }
</script>

        <style scoped>
/*.input-lg {
      margin-bottom: 10px;
    }
     */

.triple-input .kol1 {
    width: 25%;
}

.triple-input .kol2 {
    width: 40%;
}


.triple-input .kol3 {
    width: 25%;
}

#hasil .row {
    padding: 5px;
}



#nopol1,
#nopol3 {
    text-transform: uppercase;
}
</style>
