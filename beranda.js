import React from 'react';

class Beranda extends React.Component {
    render() {
        return (

            <div>
                <br />
                <div class="alert alert-dark" role="alert">
                    <center><h2>Selamat Datang Di Website Perkenalanan</h2>
                        <p>Website ini akan digunakan untuk melakukan uji coba perkenalanan, Tujuan website ini hanya sekedar uji coba
                        untuk melakukan pergantian warna,css,bootstrap dan lainya.
                    </p>
                    </center>
                </div>
                 <form>
                <div class="card">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Tentang Saya &nbsp;&nbsp;<a href="Tentangsaya" class="btn btn-primary">Cek Profil </a></li>
                        <li class="list-group-item">Karya &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="Karya" class="btn btn-primary">Lihat Karya</a></li>
                        <li class="list-group-item">Kontak &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="Kontak" class="btn btn-primary">Cek Kontak</a></li>
                    </ul>
                </div>
                </form>


            </div>

        );

    }


}
export default Beranda;