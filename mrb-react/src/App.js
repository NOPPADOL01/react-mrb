import "./App.css";

import Meet from "./Meet";
import Date from "./Date";

function Button() {
  return (
    <button>
      <h2>Book Now</h2>
    </button>
  );
}

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <Meet/>
          <Date/>
        </header>
        <body>
          <Button/>
          </body>
          <footer className="App-footer">
            Design Dolly Solution co,td
          </footer>
      </div>
    </>
  );
}

export default App;