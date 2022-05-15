import { Provider } from 'react-redux';
import { Navigation } from './routers/Navigation';
import { store } from './store/store';

function App() {

  return (
    <div className="App">
      <Provider store={ store } >
          <Navigation />
      </Provider>

    </div>
  );
}

export default App;
