
import './App.css';
import Logo from './images/logo.png';
import Personagem1 from './images/personagem1.jpg';
import Personagem2 from './images/personagem2.jpg';
import Personagem3 from './images/personagem3.jpg';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Descricao from './components/Descricao/Descricao';
import Descricao2 from './components/Descricao/Descricao2';
import Descricao3 from './components/Descricao/Descricao3';
import Descricao4 from './components/Descricao/Descricao4';
import Descricao5 from './components/Descricao/Descricao5';
import Descricao6 from './components/Descricao/Descricao6';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/desc-hitler",
      element: <Descricao/>
    }, 
    {
      path: "/desc-himmler",
      element: <Descricao2/>
    },
    {
      path: "/desc-goebbels",
      element: <Descricao3/>
    },
    {
      path: "/desc-hitler2",
      element: <Descricao4/>
    },
    {
      path: "/desc-mussolini",
      element: <Descricao5/>
    },
    {
      path: "/desc-hirohito",
      element: <Descricao6/>
    }

  ])


  return (
    <>
  
      <div>
      <RouterProvider router={router}/>
      </div>
    </>
  )
}

export default App
