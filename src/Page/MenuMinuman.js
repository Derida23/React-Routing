import React, { Component } from "react";
import DaftarMinuman from "../Lib/DaftarMinuman";
import Header from "./Header";

class MenuMinuman extends Component {
  render() {
    return(
      <div>
        <Header />
        <h3> Daftar Minuman Favorit </h3>
        <table style={{ width: "100%"}}>
          <tbody>
            <tr>
              {DaftarMinuman.map ((data, index) => {
                return(
                  <td key={index}>
                    <center>
                      <img
                        src={data.gambar}
                        alt="Produk Minuman"
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

export default MenuMinuman;
