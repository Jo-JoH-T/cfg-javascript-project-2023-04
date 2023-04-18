import logo from './logo.svg';
import './App.css';
import TileTest from './TileTest';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <TileTest />
        </p>
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

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
