import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ListPage from './components/ListPage';
import DetailPage from './components/DetailPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <ListPage />
          </Route>
          <Route exact path="/player/:id">
            <DetailPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
