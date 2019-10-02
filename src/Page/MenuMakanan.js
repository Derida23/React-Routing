import React, { Component } from "react";
import DaftarMakanan from "../Lib/DaftarMakanan";
import Header from "./Header";



class MenuMakanan extends Component {
  render() {
    return(
      <div>
        <Header />
        <h3> Daftar Makanan Favorit </h3>
        <table style={{ width: "100%"}}>
          <tbody>
            <tr>
              {DaftarMakanan.map ((data, index) => {
                return(
                  <td key={index}>
                    <center>
                      <img
                        src={data.gambar}
                        alt="Produk Makanan"
                        width="150"
                        height="100"
                      />
                      <p>{data.nama}</p>
                      <p> Harga : Rp. {data.harga}</p>
                    </center>
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default MenuMakanan;
