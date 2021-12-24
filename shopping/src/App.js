import { Container } from '@material-ui/core';
import { BrowserRouter as BRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './components/Header';
import MainRoutes from './routes';
import store from './components/store';


const App = () => {

  const localCart = JSON.parse(localStorage.getItem('amigurumishopping: cart'))
  if(localCart !== null){
    store.dispatch({type: 'CHANGE_CART', localCart})
  }

  return (
    <Provider store={store}>
      <Container maxWidth="xl">
        <BRouter>
          <Header />
          <MainRoutes />
        </BRouter>
      </Container>
    </Provider>
  )
}

export default App;
