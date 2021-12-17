import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'; "react-router-dom";
import { store } from './store';
import { App } from './components/app';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <StrictMode>
        <App/>
      </StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
