import React from 'react';
import $ from 'jquery';

class belanja extends React.Component {
    constructor() {
        super();
        this.state = {
            barang: [
                { kode: "001", nama: "Minyak", harga: "14.000/ltr" },
                
                
            ],
            kode: "",
            nama: "",
            harga: "",
            action: ""
        }
    }
    	bind = (event) => {  
        	  this.setState({[event.target.name]: event.target.value});  
        	  /* fungsi ini digunakan untuk memasukkan data dari elemen input 
        	  ke variable state. 
        	  contoh ketika input nis diisi, maka secara otomatis variabel nis 
        	  pada state bernilai sesuai dengan inputan 
        	  */  
        	}  
    	  
        	SaveBarang = (event) =>{  
        	  event.preventDefault();  
        	  // temp digunakan untuk menyimpan sementara  
        	  // data array siswa  
        	  let temp = this.state.barang;  
          
        	  if (this.state.action === "insert") {  
        	    // temp akan ditambahkan dengan data siswa yang baru  
        	    // sesuai dengan data yang dimasukkan pada form  
        	    temp.push({  
        	      kode: this.state.kode,  
        	      nama: this.state.nama,  
        	      harga: this.state.harga  
        	    });  
        	  } else if (this.state.action === "update") {  
        	    // mencari index data yang akan diubah  
        	    let index = temp.findIndex(item => item.kode === this.state.kode);  
        	    // mengubah data array sesuai dengan masukan pada form  
        	    temp[index].nama = this.state.nama;  
        	    temp[index].harga = this.state.harga;  
        	  }  
        	  
        	  
        	  // array siswa diupdate dengan nilai data temp  
        	  this.setState({barang: temp});  
        	  
        	  // menutup modal  
        	  $("#modal").modal('hide');  
        	}  
        	  
        	Add = () => {  
        	  // mengosongkan nilai nis, nama, dan alamat  
    	      // pada saat tombol add ditekan  
        	  this.setState({  
        	    kode: "",  
        	    nama: "",  
        	    harga: "",  
        	    action: "insert"  
        	  });  
        	}  
        	  
        	Edit = (item) => {  
        	  this.setState({  
        	    kode: item.kode,  
        	    nama: item.nama,  
        	    harga: item.harga,  
        	    action: "update"  
        	  });  
        	}  
        	  
        	Drop = (index) => {  
        	  // temp digunakan untuk menyimpan sementara  
        	  // data array siswa  
        	  let temp = this.state.barang;  
        	  
        	  // menghapus data pada index yang dihapus  
        	  temp.splice(index,1);  
        	  
        	  // array siswa diupdate dengan nilai data temp  
        	  this.setState({barang: temp});  
        	}  




    render() {
        return (
            <div className="container">  
	        { /* generate list */ }  
            <p></p>
	        <ul className="list-group">  
	          {this.state.barang.map((item,index) => {  
	            return (  
                    <center>
                    <table className="table">
                    <table class="table table-striped">
	              <a key={index}>   
                  <thead class="thead-dark">
                            <tr>
                                <th scope="col">Kode Barang</th>
                                <th scope="col">Nama Barang</th>
                                <th scope="col">Harga</th>
                                <th scope="col">Button</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">{item.kode}</th>
                                <td>{item.nama}</td>
                                <td>{item.harga}</td>
                                <td>
                                <button className="btn btn-sm btn-primary m-1" onClick={() => this.Edit(item)}  
	                             data-toggle="modal" data-target="#modal">Edit</button>

                                 <button className="btn btn-sm btn-danger m-1" onClick={() => this.Drop(index)}>Hapus</button>
                                </td>
                            </tr>
                        </tbody>
	               
	              </a>  
                  </table>
                  </table>
                  </center>
	            );  
	          })}  
        </ul>  
	        <button className="btn btn-sm btn-success m-3" onClick={this.Add}  
	        data-toggle="modal" data-target="#modal">  
	          Tambah Data  
	        </button>
	  
	        { /* elemen form modal */ }  
	        <div className="modal fade" id="modal">  
	          <div className="modal-dialog">  
	            <div className="modal-content">  
	              <div className="modal-header bg-dark text-white">  
	                <h5>Tambah Belanja</h5>  
	              </div>  
	              <form onSubmit={this.SaveBarang}>  
	              <div className="modal-body">  
	                Kode Barang 
	                <input type="text" name="kode" className="form-control" onChange={this.bind}  
	                value={this.state.kode} />  
	                Nama Barang
	                <input type="text" name="nama" className="form-control" onChange={this.bind}  
	                value={this.state.nama} />  
	                Harga Barang  
	                <input type="text" name="harga" className="form-control" onChange={this.bind}  
	                value={this.state.harga} />  
	              </div>  
	              <div className="modal-footer">  
	                <button type="submit" className="btn btn-primary">  
	                  Simpan  
	                </button>  
	              </div>  
	              </form>  
	            </div>  
	          </div>  
	        </div>  
	      </div>  
	    );  
	  }  
}

export default belanja;