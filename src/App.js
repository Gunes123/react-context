import './app.css';
import Keyboard from './components/piano/keyboard';
import Provider from './context/provider';

function App() {
  return (
    <div className="App">
      {
        <Provider>
          <Keyboard />
        </Provider>
      }
    </div>
  );
}

export default App;
