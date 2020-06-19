// import axios from 'axios';
// import Cadastro from './pages/cadastro/cadastro';

// import './pages/home/home.css';
// import './pages/login/login.css';
// //import 'bootstrap/dist/css/bootstrap.min.css';
// //import * as serviceWorker from './serviceWorker';



// export default class App extends Component {
//     render() {
//         return (
//             <>
//                 <Navbar />
//                 <div className="center-render"></div> {/* renderizar aqui as outras classes já que header/footer serão fixed,,, */}
//                 <Footer />
//             </>
//         )
//     }
// }


// // TODO: links do jeito do react e tal, fix size & positioning, footer
// export class Navbar extends Component {
//     render() {
//         return (
//             <div className="Navbar">
//                 <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
//                     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
//                         <span class="navbar-toggler-icon"></span>
//                     </button>
//                     <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
//                         <a class="navbar-brand" href="/">Hidden brand</a>
//                         <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
//                             <li class="nav-item active">
//                                 <a class="nav-link" href="/login">Login <span class="sr-only">(current)</span></a>
//                             </li>
//                             <li class="nav-item">
//                                 <a class="nav-link" href="/cadastro">Cadastro</a>
//                             </li>
//                         </ul>
//                         <form class="form-inline my-2 my-lg-0">
//                             <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
//                             <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//                         </form>
//                     </div>
//                 </nav>
//             </div>
//         );
//     }
// }

// export class Footer extends Component {
//     render() {
//         return (
//             <div className="Footer">

//             </div>
//         );
//     }
// }

// export class Home extends React.Component {
//     render() {
//         return (
//             <>
//                 <div className="Home">

//                     <header className="Home-header"></header>

//                     <p className="Home-intro">
//                         <Link to="/">Ir para home\o/</Link>
//                     </p>

//                 </div>
//             </>
//         );
//     }
// }

// export class Cadastro extends Component {
//     render() {
//         return (
//             <>
//             <Link to="/cadastro"></Link>
//                 <div className="Cadastro">
//                     <form>

//                     </form>
//                 </div>
//             </>
//         );
//     }
// }

// export class Login extends React.Component {
//     render() {
//         return (

//             <div className="Login">

//                 <p className="Login-intro">
//                     <Link to="/login"></Link>
//                 </p>

//                 <form>

//                     <h1>Entre em sua conta</h1>
//                     <br />

//                     <label> E-mail</label>
//                     <input className='input' type="text"></input>

//                     <label> Senha</label>
//                     <input className='input' type="password"></input>

//                     <span className="link1"><a href="#">Esqueceu sua senha?</a></span>
//                     <span className="link2"><a href="#">Cadastre-se</a></span>
//                     <br/>

//                     <button type="submit" className='btnEntrar'>Entrar</button>

//                 </form>
//             </div>
//         );
//     }
// }