import Router from "./Router/Router";
import { CurrenciesProvider } from "./providers/Currencies/CurrenciesProvider";
import { YourCryptosProvider } from "./providers/YourCryptos/YourCryptosProvider";

function App() {
  return (
    <div className="App">
      <CurrenciesProvider>
        <YourCryptosProvider>
          <Router />
        </YourCryptosProvider>
      </CurrenciesProvider>
    </div>
  );
}

export default App;
