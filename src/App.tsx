import { Provider } from 'react-redux';
import { 
  // BrowserRouter,
   HashRouter } from 'react-router-dom';
import { Navigation } from './routers/Navigation';
import { store } from './store/store';

function App() {

  return (
    <div className="App">
      <Provider store={ store } >
        <HashRouter>
        {/* <BrowserRouter> */}
          <Navigation />
        {/* </BrowserRouter> */}
        </HashRouter>
      </Provider>

    </div>
  );
}

export default App;
