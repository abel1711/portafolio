import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Navigation } from './routers/Navigation';
import { store } from './store/store';

function App() {

  return (
    <div className="App">
      <Provider store={ store } >
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>
      </Provider>

    </div>
  );
}

export default App;
