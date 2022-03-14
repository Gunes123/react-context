
import './App.css';
import DataGrid from './components/DataGrid/DataGrid';
import Provider from './context/Provider/Provider';
function App() {
  return (
    <div className="App">
      {<Provider>
       <DataGrid/>
       </Provider>
      }
    </div>
  );
}

export default App;
