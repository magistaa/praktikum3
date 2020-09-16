import React from 'react';

class Karya extends React.Component {
    render() {
        return (
            <div>
               <div class="card" width="18rem;">
               <img src="web1k.jpg" class="card-img-top"></img>
               <div class="card-body">
               <h5 class="card-title">Desain Web Perpus</h5>
               <p class="card-text">Ini adalah salah satu karya Saya, sebuah desain website
               untuk peprustakaan online</p>
               <p class="card-text"><small class="text-muted">Diupdate 15 menit yang lalu</small></p>
               <a href="/" class="btn btn-primary">Kembali </a>
               </div>
               </div>
            </div>
        )
    }
}

export default Karya;