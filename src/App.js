import logo from "./logo.svg";
import "./App.css";
import TelegramLoginButton from "react-telegram-login";

function App() {
  const handleTelegramResponse = (response) => {
    console.log(response);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <TelegramLoginButton
          dataOnauth={handleTelegramResponse}
          botName="xtremex_bot"
        />
      </header>
    </div>
  );
}

export default App;
