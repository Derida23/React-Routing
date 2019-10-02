import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./App";
import MenuMakanan from "./Page/MenuMakanan";
import MenuMinuman from "./Page/MenuMinuman";
import Kontak from "./Page/Kontak";

const AppRouter = () => (
  <Router>
    <div>
      <Route path = "/" exact component = {App} />
      <Route path = "/menu_makanan" component = {MenuMakanan} />
      <Route path = "/menu_minuman" component = {MenuMinuman} />
      <Route path = "/kontak" component = {Kontak} />
    </div>
  </Router>
);

export default AppRouter;
