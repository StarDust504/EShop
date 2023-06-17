import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import instagram from './instagram.svg';
import whatsapp from './whatsapp.svg';
import line from './line.svg';
import search from './search.svg';
import heart from './heart.svg';
import humanTop from './humanTop.svg';
import humanBottom from './humanBottom.svg';
import cartTop from './cartTop.svg';
import cartBottom from './cartBottom.svg';
import dream from './dream.svg';
import dreamMini from './logo2.svg';
import logo from './logo.svg';
import Footer from './components/Footer'

function App() {
  return (
    /*<>
    <nav className="navbar navbar-expand bg-secondary text-light d-flex flex-row justify-content-between" style={{fontSize: 1 + 'em', paddingRight: 5 + '%', paddingLeft: 5 + '%'}}>
      <div className="d-flex flex-row justify-content-around" style={{width: 30 + '%'}}>
        <a className="nav-link" href="#">Контакты</a>
        <a className="nav-link" href="#">О нас</a>
        <a className="nav-link" href="#">Доставка</a>
      </div>
      <div className="d-flex flex-row justify-content-around" style={{width: 30 + '%'}}>
        <div className="d-flex flex-row align-items-center" style={{width: 20 + '%'}}>
          <img src={instagram} className="rounded" style={{paddingRight: 15 + '%', paddingTop: 5 +'%', width: 50 + 'px', height: 50 + '%'}}></img>
          <a className="nav-link" href="#" style={{width: 30 + '%'}}>logo</a>
        </div>
        <div className="d-flex flex-row align-items-center" style={{width: 20 + '%'}}>
          <img src={whatsapp} className="rounded" style={{paddingRight: 15 + '%', paddingTop: 5 +'%', width: 50 + '%', height: 50 + '%'}}></img>
          <a className="nav-link" href="#" style={{width: 30 + '%'}}>Whatsapp</a>
        </div>
      </div>
    </nav>
    <nav className="navbar container-fluid d-flex flex-row justify-content-around align-items-center border-bottom border-secondary border-opacity-10">
      <img src={dreamMini} className="img-fluid" style={{width: 20 + '%'}}></img>
      <form className="d-flex flex-row">
        <button type="button" className="btn btn-secondary rounded-0 d-flex flex-row align-items-center" style={{width: 60 + '%'}}>
          <div className="d-flex flex-column" style={{marginRight: 10 + '%'}}>
            <img src={line} className="rounded" style={{paddingBottom: 10 + '%'}}></img>
            <img src={line} className="rounded" style={{paddingBottom: 10 + '%'}}></img>
            <img src={line} className="rounded"></img>
          </div>
          <p className="text-light" style={{margin: 0, textTransform: 'uppercase'}}>Каталог</p>
        </button>
          <input type="search" className="form-control rounded-0"></input>
          <button type="submit" className="btn rounded-0">
            <img src={search}></img>
          </button>
      </form>
      <div className="d-flex flex-row justify-content-between text-secondary align-items-center" style={{width: 30 + '%'}}>
        <img src={heart}></img>
        <a className="nav-link" href="#">Избранное</a>
        <div className="d-flex flex-column align-items-center">
          <img src={humanTop}></img>
          <img src={humanBottom}></img>
        </div>
        <a className="nav-link" href="#">Вход/Регистрация</a>
        <div className="d-flex flex-column align-items-center">
          <img src={cartTop}></img>
          <img src={cartBottom}></img>
        </div>
        <p className="d-flex flex-row align-items-center" style={{margin: 0}}>5000 &#8381; / 5 шт.</p>
      </div>
    </nav>
    <div className="d-flex justify-content-center">
      <img src={dream} className="img-fluid"></img>
    </div>
    
    </>
    */
    <Footer/>
  );
}

export default App;
