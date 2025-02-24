# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


<!-- passaggi principali:

apriamo PowerShell >
andiamo sulla cartella padre >
creiamo la cartella usando npm create vite@latest >
spostiamoci sulla cartella appena creata >
installiamo npm usando npm install >
apriamo la cartella su VScode >
installiamo react-ruter-dom usando npm install react-ruter-dom >
installiamo axios per poter richiamare le API con npm install axios >
avviamo il server con npm run dev >


IN SRC :
creiamo una cartella pages dove creiamo i nostri file per le pagine 
creiamo una cartella layouts dove creiamo il file per il layout che devono seguire le nostre pagine


NEL NOSTRO FILE DI LAYOUT:
importiamo outlet da react-router-dom per il rendering delle rotte figlie
IN QUESTO CASO:
importiamo anche il componente Header 
nella nostra funzione utilizziamo i componenti <Header/> par avere sempre l'Header nelle nostre pagine e il componente <Outlet/> 


NEL FILE HEADER:
Importiamo Link e NavLink dalla libreria react-router-dom per la navigazione
import { Link, NavLink } from "react-router-dom";

nella funzione richiamiamo le rotte le altre pagine
export default function Header() {
    return (
        <header>
            <div className="nav-bar">
                {/* NavLink per la navigazione alle pagine */}
                <NavLink to="/">Homepage</NavLink>
                <NavLink to="/chisiamo">Chi Siamo</NavLink>
                <NavLink to="/listpost">Lista dei post</NavLink>

            </div>
        </header>
    )
}



NEI FILE CONTENUTI NELLA CARTELLA PAGES:
inseriamo i contenuti relativi ad ogni pagina



NEL FILE App.jsx (FILE PRINCIPALE)
importiamo gli elementi della libreria di gestione delle rotte
(import { BrowserRouter, Routes, Route } from "react-router-dom";)

importiamo il file per il Layout
import DefaultLayout from "./layouts/DefaultLayout";

importiamo i file contenuti nella cartella Pages
import HomePage from "./pages/HomePage"
import ChiSiamo from "./pages/ChiSiamo"
import ListPost from "./pages/ListPost"

nel return della nostra funzione inseriamo i componenti da visualizzare usando gli elementi di react-router-dom
function App() {

  return (

    <BrowserRouter>
      <Routes>
        {/* DefaultLayout viene utilizzato come layout di default per le rotte */}
        <Route element={<DefaultLayout />}>
          {/* Definizione delle rotte */}
          <Route path="/" element={<HomePage />} />
          <Route path="/chisiamo" element={<ChiSiamo />} />
          <Route path="/listpost" element={<ListPost />} />

        </Route>
      </Routes>
    </BrowserRouter>
  )}
  
 -->