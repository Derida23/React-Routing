import React, { Component } from "react";
import Header from "./Header";
import "../Style/Header.css";

class MenuHome extends Component {
  render() {
    return(
      <div>
        <Header />
        <br />

        <h1>
          <center>Selamat Datang di Halaman Utama Masakan Nusantara</center>
        </h1>
        <div className="image_header">
          <br />
        </div>
      </div>
    );
  }
}

export default MenuHome;
