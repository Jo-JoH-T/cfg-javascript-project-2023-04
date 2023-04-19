import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './NavBar';
import Footer from './Footer';
import TileTest from './TileTest';

function App() {
  return (
  
     <div>
       <NavBar />
      
       <header>
								<h1>Thursday 20th April <br /> London<br />
								</h1>
								<h2>Soundwaves is an independent festival for music fans looking to discover something different.
									<br /> A celebration of independent music and countercoulture!</h2>
							</header>
        <div>
        <TileTest />
       </div>
       <table>
          <th>
            <td><TileTest className="SquarePink"/></td>
            <td><TileTest className="SquareBlue"/></td>
            <td><TileTest className="SquarePink"/></td>
          </th>
          <tr>
            <td><TileTest className="SquareBlue"/></td>
            <td><TileTest className="SquarePink"/></td>
            <td><TileTest className="SquareBlue"/></td>
          </tr>
        </table>

             <Footer />
     </div>
  )
  };


export default App;
