import React, { Component } from "react";
import Header from "./Header";
import "../Style/Kontak.css";

class Kontak extends Component {
  render() {
    return(
      <div id="kontak_bg">
        <Header />
        <div className="kontak">
          <h3>
            Jl. Swadaya IV, Pd. Ranggon, Cipinang, Kota Jakarta Timur, Daerah
            Khusus Ibukota Jakarta - 13860
          </h3>
          <p> 085725635425 </p>
        </div>
      </div>
    );
  }
}

export default Kontak;
