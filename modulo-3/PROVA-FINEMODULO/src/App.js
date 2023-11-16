import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Categories from './components/Categories';
import Products from './components/Products';
import Search from './components/Search';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App-header">
          <header className="menu-wrapper">
            <Menu />
          </header>
          <div className='page-wrapper'>
            <h1>Benvenuto su Amazon!</h1>
            <aside className='sidebar'>
              <Routes>
                <Route path="/" element={<Categories />} />
              </Routes>
            </aside>
            <main className='elenco-prodotti'>
              <Routes>
                <Route path="/products/:category" element={<Products />} />
              </Routes>
            </main>
            <div className='search'>
              <Routes>
                <Route path="/search" element={<Search />} />
              </Routes>
            </div>
          </div>

        </div>
      </BrowserRouter>
    </>

  );
}

export default App;
