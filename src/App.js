import { useState } from "react";
import AddMovie from "./Components/AddMovie/AddMovie";
import List from "./Components/List/List";
import Search from "./Components/Search/Search";


function App() {

  const [listadoState, setListadoState] = useState([]);


  return (
    <div className="layout">
      <header className="header">
        <div className="logo">
            <div className="play">

            </div>
        </div>
        <h1>NEFLI</h1>
      </header>

      <nav className="nav">
        <ul>
          <li><a href="/#">Inicio</a></li>
          <li><a href="/#">Peliculas</a></li>
          <li><a href="/#">Blog</a></li>
          <li><a href="/#">Contacto</a></li>
        </ul>
      </nav>

      <section className="content">
        <List listadoState={listadoState} setListadoState={setListadoState}/>
      </section>

      <aside className="lateral">
        <Search listadoState={listadoState} setListadoState={setListadoState}/>
        <AddMovie setListadoState={setListadoState}/>
      </aside>

      <footer className="footer">
        &copy; Máster en React -
        <a href="https://github.com/Freetzen">Federico Ruiz Gei</a>
      </footer>
    </div>
  );
}

export default App;