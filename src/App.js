import logo from './logo.svg';
import './App.css';
import Saludar from './components/Saludar';
import Calculadora from './components/Calculadora';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React holi
        </a>

        <Saludar firstName="Omar" lastName="Mijangos"/>
        <Saludar firstName="Oscar" lastName="CasTIllo"/>
        <Saludar firstName="David" lastName="Moranchel"/>
        <Calculadora firstValue={43} secondValue={54} operator={"resta"}/>
      </header>
    </div>
  );
}

export default App;
