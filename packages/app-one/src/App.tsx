import { BlueButton } from '@namespace/core';
import LocalButton from 'components/LocalButton';
import './App.css';
import logo from './logo.svg';

function App(): JSX.Element {
  return (
    <div className="App">
      <p>
        <LocalButton label="Local " />
        <BlueButton label="Core " />
      </p>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
