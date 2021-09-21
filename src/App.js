import MessengerCustomerChat from 'react-messenger-customer-chat';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/header'
import NavBar from './components/navbar';
import Inicio from './inicio';
import Galeria from './galeria'
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <Header />
      <NavBar />
      <main>
        <Switch>
          <Route exact path="/"><Inicio /></Route>
          <Route exact path="/galeria"><Galeria /></Route>
        </Switch>
      </main>
      <Footer />
      <MessengerCustomerChat pageId="117170347250412" appId="2936257246691188" />
    </Router>
  );
}

export default App;
