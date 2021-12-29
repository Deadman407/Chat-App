import React, {useState, useEffect} from 'react'
import './App.css';
import Sidebar from './Sidebar'
import Chat from './Chat'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './Login';

function App() {
  const [user, setUser] = useState(null)

  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
        <div className="app_body">
          <Router>
            <Sidebar />
            <Switch>
              <Route path='/rooms/:roomId' exact>
                <Chat />
              </Route>
              <Route path="/">
                <Chat />
              </Route>
            </Switch>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
